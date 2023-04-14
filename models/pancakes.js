const mongoose = require("mongoose")
const pancakesSchema = mongoose.Schema({
    pancakes_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("pancakes",pancakesSchema)