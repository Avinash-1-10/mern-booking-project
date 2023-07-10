const mongoose = require('mongoose');


// Define the bookMovieSchema using Mongoose's Schema class
const bookMovieSchema = new mongoose.Schema({
  movie: { type: String },
  slot: { type: String },
  seats: {
    A1: { type: Number },
    A2: { type: Number },
    A3: { type: Number },
    A4: { type: Number },
    D1: { type: Number },
    D2: { type: Number }
  }
});


// Export the bookMovieSchema for use in other modules
module.exports = bookMovieSchema;
