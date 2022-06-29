const discordTypes = require("discord-api-types/v10")
/**
 *
 * @param {Map} options
 * @param {discordTypes.APIInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */

function kill(options, interaction) {
	return {
		type: discordTypes.InteractionResponseType.ChannelMessageWithSource,
		data: {
			tts: false,
			embeds: [
				{
					color: 16748144,
					title: "Coming soon",
					thumbnail: {
						url: "https://tenor.com/view/laplus-%E3%83%A9%E3%83%97%E3%83%A9%E3%82%B9-%E3%83%80%E3%83%BC%E3%82%AF%E3%83%8D%E3%82%B9-gif-24711107",
					},
				},
			],
			allowed_mentions: { parse: [] },
		},
	}
}

module.exports = { kill }
