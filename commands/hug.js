const discordTypes = require("discord-api-types/v10")
/**
 *
 * @param {Map} options
 * @param {discordTypes.APIInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */



function hug(options, interaction) {
    var gifArray = [
		"https://cdn.discordapp.com/attachments/830472618082697267/844583573445279795/29bda53055fd3c8e11b800b8a5af4beb.gif",
		"https://cdn.discordapp.com/attachments/822956984411488257/849727051681235054/ezgif.com-gif-maker.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844583577009258536/tenor_6.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844583577030885416/tenor_1.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844583577865420850/tenor_7.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844583577865420850/tenor_7.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844583580037677096/tenor_8.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844583580432203806/tenor_9.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844583582155538442/tenor_10.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844583582688215050/tenor_12.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844583583649628160/tenor.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844584156016672768/ezgif-4-789d074c7405.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844584157056335902/tenor2.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844584377249169418/tenor1.gif",
		"https://cdn.discordapp.com/attachments/830472618082697267/844584527292792854/tenor3.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/851216421937479740/2tenor.gif",
		"https://cdn.discordapp.com/attachments/771202289678942219/851216425913548800/1tenor.gif"
	]

    if (options.has("user")) {
		return {
			type: discordTypes.InteractionResponseType.ChannelMessageWithSource,
			data: {
				tts: false,
				embeds: [
					{
						title: interaction.member.user.username +" hugged " + interaction.data.resolved.users[options.get("user")].username,
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
						title: interaction.member.user.username + " hugged themselves",
						image: {
							url: gifArray[Math.floor(Math.random() * gifArray.length)]
						},
					},
				],
                allowed_mentions: { parse: [] },
                
			},
		}
	}
}



module.exports = { hug }
