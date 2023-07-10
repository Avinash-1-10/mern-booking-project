const express = require("express");
const router = express.Router();
const { createBooking, getLastBooking } = require("./controller");

// Middleware to parse request bodies as JSON
router.use(express.json());

// Route for creating a new booking
router.post("/booking", createBooking);

// Route for retrieving the latest booking
router.get("/booking", getLastBooking);

// Export the router for use in other modules
module.exports = router;
