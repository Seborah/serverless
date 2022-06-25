const discordTypes = require("discord-api-types/v10")
/**
 *
 * @param {Map} options
 * @param {discordTypes.APIInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */
function pfp(options, interaction) {
	if (options.has("user")) {
		return {
			type: discordTypes.InteractionResponseType.ChannelMessageWithSource,
			data: {
				tts: false,
				embeds: [
					{
						title: interaction.data.resolved.users[options.get("user")].username,
						image: {
							url: avatarURL(
								interaction.data.resolved.users[options.get("user")].id,
								interaction.data.resolved.users[options.get("user")].avatar
							),
						},
					},
				],
				allowed_mentions: { parse: [] },
			},
		}
	} else {
		return {
			type: discordTypes.InteractionResponseType.ChannelMessageWithSource,
			data: {
				tts: false,
				embeds: [
					{
						title: interaction.member.user.username,
						image: {
							url: avatarURL(interaction.member.user.id, interaction.member.user.avatar),
						},
					},
				],
                allowed_mentions: { parse: [] },
                
			},
		}
	}
}

/**
 *
 * @param {String} id
 * @param {String} avatarHash
 */
function avatarURL(id, avatarHash) {
	if (avatarHash.startsWith("a_")) {
		return `https://cdn.discordapp.com/avatars/${id}/${avatarHash}.gif?size=512`
	} else {
		return `https://cdn.discordapp.com/avatars/${id}/${avatarHash}.png?size=512`
	}
}

module.exports = { pfp }
