var axios = require("axios").default

var endpoint = "https://discord.com/api/v10/guilds/{0}/emojis"

async function getEmojis(token, serverID) {
	try {
		var response = await axios.get(endpoint.replace("{0}", serverID.toString()), {
			headers: {
				authorization: "Bot " + token,
			},
		})
	} catch (err) {
		console.log(err)
		return null
	}
	return response.data
}
