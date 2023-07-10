const mongoose = require("mongoose");
const bookMovieSchema = require("./schema");
const dotenv = require("dotenv");
dotenv.config();



// MongoURI for testing
// const mongoURI = "mongodb://localhost:27017/bookMovie";

// MongoURI for production
const mongoURI = process.env.mongoURI;
// Function to establish connection with MongoDB
const connection = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.error("Error while connecting to MongoDB:", err);
    });
};

// Create a Mongoose model for the "bookmovietickets" collection
const BookMovieTicket = mongoose.model("bookmovietickets", bookMovieSchema);

// Export the connection function and BookMovieTicket model for use in other modules
module.exports = {
  connection,
  BookMovieTicket,
};
