//const discordTypes = require("discord-api-types/v10")

const EPOCH = 1_420_070_400_000

function timestampFrom(snowflake) {
	return Number(BigInt(snowflake) >> 22n) + EPOCH
}

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
			type: 4,
			data: {
				tts: false,
				embeds: [
					{
						color: 16748144,
						title: interaction.data.resolved.users[options.get("user")].username,
						description: `ID: ${interaction.data.resolved.users[options.get("user")].id} \nAccount Created: <t:${Math.floor(
							timestampFrom(interaction.data.resolved.users[options.get("user")].id) / 1000
						)}>`,
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
			type: 4,
			data: {
				tts: false,
				embeds: [
					{
						color: 16748144,
						title: interaction.member.user.username,
						description: `ID: ${interaction.member.user.id} \nAccount Created: <t:${Math.floor(timestampFrom(interaction.member.user.id) / 1000)}>`,
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

module.exports = { command: userinfo }
