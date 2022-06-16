const mongoose = require("mongoose")

var Random = mongoose.Schema({
	data: { type: String, required: false },
})

module.exports = mongoose.model("Random", Random)
