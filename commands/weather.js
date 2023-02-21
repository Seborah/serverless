const axios  = require("axios").default

var auth = JSON.parse(process.env.SAKURA)


var auth = JSON.parse(process.env.SAKURA)

/**
 *
 * @param {Map} options
 * @param {discordTypes.APIApplicationCommandInteraction} interaction
 * @returns {discordTypes.APIInteractionResponse}
 */

async function weather(options, interaction) {
	/**
	 * @type {string}
	 */
	var zipcode = options.get("zipcode").toString().padStart(5, "0").substring(0, 5)
	var weatherRaw = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${auth.openweathermapKey}&units=imperial`)
	if (weatherRaw.data.cod === "404") {
		return {
			type: 4,
			data: {
				tts: false,
				embeds: [
					{
						color: 16748144,
						title: "Invalid zip code or data not found",
						description: "Please make sure you have five numbers in the zip code and that it is a valid US zip code.",
					},
				],
				allowed_mentions: { parse: [] },
			},
		}
	}
	var weather = weatherRaw.data

	return {
		type: 4,
		data: {
			tts: false,
			embeds: [
				{
					color: 16748144,
					title: "Weather in " + weather.name,
					fields: [
						{
							name: "Temperature",
							value:
								weather.main.temp +
								"°F" +
								"\n" +
								"Feels like " +
								weather.main.feels_like +
								"°F" +
								"\n" +
								"High: " +
								weather.main.temp_max +
								"°F" +
								"\n" +
								"Low: " +
								weather.main.temp_min +
								"°F",
							inline: true,
						},
						{
							name: "Humidity",
							value: weather.main.humidity + "%",
							inline: true,
						},
						{
							name: "Wind Speed",
							value: weather.wind.speed + " mph" + "\n" + weather.wind.deg + "°" + "\n" + "Gusts: " + weather.wind.gust + " mph",
							inline: true,
						},
						{
							name: "Sunrise and Sunset",
							value: "Sunrise: <t:" + weather.sys.sunrise + ":t>\n" + "Sunset: <t:" + weather.sys.sunset + ":t>",
							inline: true,
						},
						{
							name: "Clouds",
							value: weather.clouds.all + "%",
							inline: true,
						},
					],
					thumbnail: {
						url: "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png",
					},
				},
			],
			allowed_mentions: { parse: [] },
		},
	}
}

module.exports = { command: weather }
