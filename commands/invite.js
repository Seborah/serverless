//const discordTypes = require("discord-api-types/v10")
/**
 *
 * @param {Map} options
 * @param {discordTypes.APIInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */

function invite(options, interaction) {
	return {
		type: discordTypes.InteractionResponseType.ChannelMessageWithSource,
		data: {
			tts: false,
			embeds: [
				{
					color: 16748144,
					title: "Invite me to your server!",
					thumbnail: {
						url: "https://cdn.discordapp.com/attachments/858003263030951976/985937579197202483/image.png",
					},
					url: "https://discord.com/api/oauth2/authorize?client_id=771500590731231233&permissions=0&scope=applications.commands",
				},
			],
			allowed_mentions: { parse: [] },
		},
	}
}

module.exports = { invite }
