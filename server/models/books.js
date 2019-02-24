/*
File: book.js - Db Schema for books
Name: Sidharth Choudhary
Student ID: 300990285
Web App Name: BOOKPalace
*/

let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
