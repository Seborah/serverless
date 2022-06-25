const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { clientID, token } = require("./auth.json")

const commands = [
	new SlashCommandBuilder().setName("wholesome").setDescription("Sends a wholesome GIF"),
	new SlashCommandBuilder().setName("wiggle").setDescription("Sends a wiggle GIF"),
	new SlashCommandBuilder().setName("coinflip").setDescription("Sends a coin flip GIF"),
	new SlashCommandBuilder()
		.setName("kill")
		.setDescription("Sends a kill GIF")
		.addUserOption((options) => options.setName("user").setDescription("The user to kill")),
	new SlashCommandBuilder()
		.setName("hug")
		.setDescription("Sends a hug GIF")
		.addUserOption((options) => options.setName("user").setDescription("The user to hug")),
	new SlashCommandBuilder().setName("invite").setDescription("Sends the invite link for this Bot"),
	new SlashCommandBuilder().setName("music").setDescription("Sends a google doc with music links"),
	new SlashCommandBuilder()
		.setName("userinfo")
		.setDescription("Sends information about a user")
		.addUserOption((options) => options.setName("user").setRequired(false).setDescription("The user to get info on, defaults to you")),
	new SlashCommandBuilder()
		.setName("pfp")
		.setDescription("Sends a the user's profile picture")
		.addUserOption((options) => options.setName("user").setRequired(false).setDescription("The user to get the profile picture for, defaults to you")),
	new SlashCommandBuilder()
		.setName("weather")
		.setDescription("Sends the weather for a zip code")
		.addNumberOption((options) => options.setName("zipcode").setRequired(true).setDescription("The zip code to send the weather for")),
].map((command) => command.toJSON())

const rest = new REST({ version: "9" }).setToken(token)

;(async () => {
	try {
		console.log("Started refreshing application (/) commands.")

		await rest.put(Routes.applicationCommands(clientID), { body: commands })

		console.log("Successfully reloaded application (/) commands.")
	} catch (error) {
		console.error(error)
	}
})()
