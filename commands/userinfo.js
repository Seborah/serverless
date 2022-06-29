const discordTypes = require("discord-api-types/v10")
/**
 *
 * @param {Map} options
 * @param {discordTypes.APIInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */
function userinfo(options, interaction) {
	if (options.has("user")) {
		console.log("has a user ")
		return {
			type: discordTypes.InteractionResponseType.ChannelMessageWithSource,
			data: {
				tts: false,
				embeds: [
					{
						color: 16748144,
						title: interaction.data.resolved.users[options.get("user")].username,
						description: "ID: " + interaction.data.resolved.users[options.get("user")].id,
						thumbnail: {
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
						color: 16748144,
						title: interaction.member.user.username,
						description: "ID: " + interaction.member.user.id,
						thumbnail: {
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
		return `https://cdn.discordapp.com/avatars/${id}/${avatarHash}.gif`
	} else {
		return `https://cdn.discordapp.com/avatars/${id}/${avatarHash}.png`
	}
}

module.exports = {command:  userinfo }
