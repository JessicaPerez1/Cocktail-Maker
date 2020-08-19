const mongoose = require("mongoose");
//setup schema
const Schema = mongoose.Schema;
const ingredientSchema = new Schema({
  type: String,
  name: String,
});
//create the model
const Ingredient = mongoose.model("Workout", ingredientSchema);
//export our model
module.exports = Ingredient;
