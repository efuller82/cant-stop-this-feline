const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema({
  catName: { type: String, required: true },
  nickname: { type: String },
  description: { type: String },
  imgURL: { type: String }
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
