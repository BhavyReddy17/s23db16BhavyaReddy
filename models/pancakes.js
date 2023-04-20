const mongoose = require("mongoose")
const pancakesSchema = mongoose.Schema({
pancake_topping: String,
size: String,
cost: Number
})
module.exports = mongoose.model("pancakes",pancakesSchema)