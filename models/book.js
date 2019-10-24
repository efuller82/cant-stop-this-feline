const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  catName: { type: String, required: true },
  nickname: { type: String },
  description: { type: String },
  imgURL: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
