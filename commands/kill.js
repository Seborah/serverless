//const discordTypes = require("discord-api-types/v10")
/**
 *
 * @param {Map} options
 * @param {discordTypes.APIInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */

function kill(options, interaction) {
	var gifArray = [
		"https://cdn.discordapp.com/attachments/759047395957932083/798595828909473822/Threat_Stewie.gif",
		"https://cdn.discordapp.com/attachments/759047395957932083/798595737751388181/Kicks.gif",
		"https://cdn.discordapp.com/attachments/759047395957932083/798595660827459584/Nuh_Uh_Uh.gif",
		"https://cdn.discordapp.com/attachments/759047395957932083/798595577083592714/Mickey_Moue_How_To_Kill.gif",
		"https://cdn.discordapp.com/attachments/759047395957932083/798595486567104542/Duck_Mad.gif",
		"https://cdn.discordapp.com/attachments/759047395957932083/798595404522323988/GOODBYE.gif",
		"https://cdn.discordapp.com/attachments/759047395957932083/798595308111659058/Addams_Family_Kill.gif",
		"https://cdn.discordapp.com/attachments/759047395957932083/798595153588912158/Kill_You_Sailor_Moon.gif",
		"https://cdn.discordapp.com/attachments/589285866598563841/798594509231489114/tenor.gif",
		"https://cdn.discordapp.com/attachments/725920684794183721/798594984928083968/Kill_You_Chuckie.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/844592617873604658/kneecapsgive.jpg",
		"https://cdn.discordapp.com/attachments/771202289678942219/844592616490139658/die.jpg",
		"https://cdn.discordapp.com/attachments/771202289678942219/845732639587696692/tenor.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/847691751153729566/tenor1.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/847691753393487872/tenor2.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/851217842815893594/1tenor.gif",
	]

	if (options.has("user")) {
		return {
			type: discordTypes.InteractionResponseType.ChannelMessageWithSource,
			data: {
				tts: false,
				embeds: [
					{
						color: 16748144,
						title: interaction.member.user.username + " killed " + interaction.data.resolved.users[options.get("user")].username,
						image: {
							url: gifArray[Math.floor(Math.random() * gifArray.length)],
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
						title: interaction.member.user.username + " killed themselves",
						image: {
							url: gifArray[Math.floor(Math.random() * gifArray.length)],
						},
					},
				],
				allowed_mentions: { parse: [] },
			},
		}
	}
}

module.exports = { command: kill }
