var fs = require("fs")
const discordTypes = require("discord-api-types/v10")
//read files and then import them for functions
var commandFunctions = new Map()
onStart()
function onStart() {
	var files = fs.readdirSync("./commands")
	for (var i = 0; i < files.length; i++) {
		var file = files[i]
		var command = require("./commands/" + file)
		commandFunctions.set(file.split(".")[0], command)
	}
}
/**
 *
 * @param {discordTypes.APIApplicationCommandInteraction} interaction
 * @returns
 */
async function commands(interaction) {
	var commandName = interaction.data.name
	var commandArgs = new Map()
	if (interaction.data.options) {
		for (var i = 0; i < interaction.data.options.length; i++) {
			commandArgs.set(interaction.data.options[i].name, interaction.data.options[i].value)
		}
	}
	return await commandFunctions.get(commandName).command(commandArgs, interaction)
}

module.exports = { commands, onStart }
