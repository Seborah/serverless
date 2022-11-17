const functions = require("@google-cloud/functions-framework")
const commands = require("./commandHandler")
var Random = require("./random")
const nacl = require("tweetnacl")

var auth = JSON.parse(process.env.SAKURA)

//! slow, adds extra import and is very large (cries)
const mongoose = require("mongoose")
mongoose.connect(auth.mongoUrl, { useNewUrlParser: true })

// Your public key can be found on your application in the Developer Portal
const PUBLIC_KEY = auth.publicToken

commands.onStart()

functions.http("Sakura", async (req, res) => {
	const signature = req.get("X-Signature-Ed25519")
	const timestamp = req.get("X-Signature-Timestamp")
	const body = req.rawBody // rawBody is expected to be a string, not raw bytes
	var isVerified = false
	try {
		isVerified = nacl.sign.detached.verify(Buffer.from(timestamp + body), Buffer.from(signature, "hex"), Buffer.from(PUBLIC_KEY, "hex"))
	} catch (e) {}
	if (!isVerified) {
		return res.status(401).send("invalid request signature")
	}
	if (req.rawBody) {
		//! slow
		var current = new Random({ data: req.rawBody.toString() })
		await current.save()

		var info = req.rawBody.toString()
		var data = JSON.parse(info)
		if (data.type == 1) {
			res.status(200)
			res.send({ type: 1 })
		} else if (data.type == 2) {
			//respond to slash commands
			return res.send(commands.commands(data))
		} else {
			return res.send("hello World")
		}
	} else {
		return res.send("nope")
	}
})
