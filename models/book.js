const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const bookSchema = new Schema({
  authors: {},
  description: String,
  image: {},
  link: {},
  title: { type: String, required: true },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;