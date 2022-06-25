const functions = require("@google-cloud/functions-framework")
const mongoose = require("mongoose")
var Random = require("./random")

var auth = JSON.parse(process.env.SAKURA)

//testing

const commands = require("./commandHandler")

mongoose.connect(auth.mongoUrl, { useNewUrlParser: true })
const nacl = require("tweetnacl")

// Your public key can be found on your application in the Developer Portal
const PUBLIC_KEY = auth.publicToken

commands.onStart()
console.log(typeof PUBLIC_KEY === "string")
console.log(typeof auth.mongoUrl)

functions.http("Sakura", async (req, res) => {
	const signature = req.get("X-Signature-Ed25519")
	const timestamp = req.get("X-Signature-Timestamp")
	const body = req.rawBody // rawBody is expected to be a string, not raw bytes
	try {
		var isVerified = nacl.sign.detached.verify(Buffer.from(timestamp + body), Buffer.from(signature, "hex"), Buffer.from(PUBLIC_KEY, "hex"))
	} catch (e) {
		var isVerified = false
	}
	if (req.rawBody) {
		var current = new Random({ data: req.rawBody.toString() })
		await current.save()
		var info = req.rawBody.toString()
		var data = JSON.parse(info)
		if (data.type == 1) {
			console.log("type 1")
			res.status(200)
			res.send({ type: 1 })
		} else if (data.type == 2) {
			if (!isVerified) {
				return res.status(401).send("invalid request signature")
			}
			//respond to slash commands
			return res.send(commands.commands(data))
		} else {
			return res.send("hello World")
		}
	} else {
		return res.send("nope")
	}
})
