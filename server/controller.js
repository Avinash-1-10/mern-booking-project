const { BookMovieTicket } = require("./connector");

// Function to create a new booking
const createBooking = async (req, res) => {
  try {
    const { movie, slot, seats } = req.body;

    // Create a new instance of BookMovieTicket model with the provided data
    const newBooking = new BookMovieTicket({ movie, slot, seats });

    // Save the new booking to the database
    const savedBooking = await newBooking.save();

    // Respond with the saved booking in the response
    res.status(200).json({ savedBooking });
  } catch (error) {
    // If an error occurs, log the error and respond with an error message
    console.error("Error creating booking:", error);
    res
      .status(500)
      .json({ message: "Something went wrong! Please try again." });
  }
};

// Function to retrieve the latest booking
const getLastBooking = async (req, res) => {
  try {
    // Find the latest booking in the database by sorting in descending order using _id
    const latestBooking = await BookMovieTicket.findOne().sort({ _id: -1 });

    // If no booking is found, respond with a message indicating the absence of a booking
    if (!latestBooking) {
      return res.status(200).json({ message: "No previous booking found!" });
    }

    // Respond with the latest booking in the response
    res.status(200).json({ latestBooking });
  } catch (error) {
    // If an error occurs, log the error and respond with an error message
    console.error("Error retrieving booking:", error);
    res
      .status(500)
      .json({ message: "Something went wrong! Please try again." });
  }
};

// Export the functions for use in other modules
module.exports = {
  createBooking,
  getLastBooking,
};
