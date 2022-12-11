//const discordTypes = require("discord-api-types/v10")
/**
 *
 * @param {Map} options
 * @param {discordTypes.APIInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */
function coinflip(options, interaction) {
	var heads = Math.random() > 0.5
	return {
		type: 4,
		data: {
			tts: false,
			embeds: [
				{
					color: 16748144,
					title: heads ? "Heads" : "Tails",
					image: {
						url: heads
							? "https://cdn.discordapp.com/attachments/771202289678942219/809931693392789514/unknown.png"
							: "https://cdn.discordapp.com/attachments/771202289678942219/809926972800237638/tails.png",
					},
				},
			],
			allowed_mentions: { parse: [] },
		},
	}
}

module.exports = { command: coinflip }
