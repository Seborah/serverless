//const discordTypes = require("discord-api-types/v10")
/**
 *
 * @param {Map} options
 * @param {discordTypes.APIInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */

function music(options, interaction) {
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

	return {
		type: 4,
		data: {
			tts: false,
			embeds: [
				{
					color: 16748144,
					title: "My music document:",
					thumbnail: {
						url: "https://cdn.discordapp.com/attachments/858003263030951976/985937579197202483/image.png",
					},
					url: "https://docs.google.com/document/d/1LeU9KheFkgISES8ojZhZL_h6uDSfbxJNaYXcRnCblHg/edit?usp=sharing",
				},
			],
			allowed_mentions: { parse: [] },
		},
	}
}

module.exports = { command: music }
