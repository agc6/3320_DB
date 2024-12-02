const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publisher: String,
  isbn: String,
  status: { type: String, enum: ['available', 'checked out'], default: 'available' },
  checkedOutBy: { type: String, default: null },
  dueDate: { type: Date, default: null },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
