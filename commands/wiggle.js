const discordTypes = require("discord-api-types/v10")
/**
 *
 * @param {Map} options
 * @param {discordTypes.APIInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */

function wiggle(options, interaction) {
	var gifArray = [
		"https://cdn.discordapp.com/attachments/771202289678942219/816692152750833724/tenor_1.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816692154604322826/tenor_2.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816692157271638096/tenor_3.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816692159238373376/tenor_4.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816692163290071070/tenor_5.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816692165257723914/tenor_6.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816692168995110912/tenor_14.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816692170768646144/tenor.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816692447383912468/BlobDance.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816692459466915841/BlobTrashDance.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/816692477197156402/bopbopbop.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/845730159478439976/432688430506442752.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/845730855871840296/tenor1.gif",
	]

	return {
		type: discordTypes.InteractionResponseType.ChannelMessageWithSource,
		data: {
			tts: false,
			embeds: [
				{
					color: 16748144,
					title: "wiggle",
					image: {
						url: gifArray[Math.floor(Math.random() * gifArray.length)],
					},
				},
			],
			allowed_mentions: { parse: [] },
		},
	}
}

module.exports = { command: wiggle }
