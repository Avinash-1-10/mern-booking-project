const express = require("express");
const app = express();
const { connection } = require("./connector");
const cors = require("cors");
const routes = require("./routes");

const port = 8080;

// Middleware to parse request bodies as JSON
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Establish connection with MongoDB
connection();

// Use the routes defined in the "routes" module for handling API endpoints
app.use("/api", routes);


app.listen(port, () => console.log(`Server is listening on port ${port}`));

