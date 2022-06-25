const functions = require("@google-cloud/functions-framework")
const mongoose = require("mongoose")
var Random = require("./random")

var auth = JSON.parse(process.env.SAKURA)

//testing

const commands = require("./commandHandler")

mongoose.connect(
    auth.mongoUrl,
	{ useNewUrlParser: true }
)
const nacl = require("tweetnacl")

// Your public key can be found on your application in the Developer Portal
const PUBLIC_KEY = auth.publicToken

commands.onStart()

functions.http("Sakura", async (req, res) => {
	const signature = req.get("X-Signature-Ed25519")
	const timestamp = req.get("X-Signature-Timestamp")
	const body = req.rawBody // rawBody is expected to be a string, not raw bytes

	const isVerified = nacl.sign.detached.verify(Buffer.from(timestamp + body), Buffer.from(signature, "hex"), Buffer.from(PUBLIC_KEY, "hex"))

	if (!isVerified) {
		return res.status(401).send("invalid request signature")
	}

	if (req.rawBody) {
		var current = new Random({ data: req.rawBody.toString() })
		await current.save()
		var info = req.rawBody.toString()
		var data = JSON.parse(info)
		if (data.type == 1) {
			res.status(200)
			res.send({ type: 1 })
		} else if (data.type == 2) {
			//respond to slash commands
			res.send(commands.commands(data))
		} else {
			res.send("hello World")
		}
	} else {
		res.send("nope")
	}
})
