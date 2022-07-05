//const discordTypes = require("discord-api-types/v10")
/**
 *
 * @param {Map} options
 * @param {discordTypes.APIInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */

function wholesome(options, interaction) {
	var gifArray = [
		"https://cdn.discordapp.com/attachments/771202289678942219/816690079120097300/tenor_5.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816690077648158740/tenor_4.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816690076586737694/tenor_3.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816690074443972668/tenor_2.gif",
		"https://cdn.discordapp.com/attachments/777237678802206741/778116444968845362/image0.png",
		"https://cdn.discordapp.com/attachments/777237678802206741/778116525855997952/image0.jpg",
		"https://cdn.discordapp.com/attachments/777237678802206741/778116988207104010/image0.png",
		"https://cdn.discordapp.com/attachments/777237678802206741/778117228381732914/image0.png",
		"https://cdn.discordapp.com/attachments/830472618082697267/844582545789419525/original.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844583353402261514/ezgif-4-d801687ae892.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/844592176956178482/tenor_13.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/844592377725583400/tenor_11.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/846500603442233344/patpatpatpat.png",
	]

	return {
		type: 4,
		data: {
			tts: false,
			embeds: [
				{
					color: 16748144,
					title: "Wholesome vibes",
					image: {
						url: gifArray[Math.floor(Math.random() * gifArray.length)],
					},
				},
			],
			allowed_mentions: { parse: [] },
		},
	}
}

module.exports = { command: wholesome }
