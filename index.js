// Importing required modules and setting up the server
require('dotenv').config();

const express = require("express");
const port = 8000;
const db = require("./config/mongoose");

const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");

const app = express();

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));


// Mounting the routes defined in the "./routes" module
app.use("/", require("./routes"));

// Start the server
app.listen(port, (err) => {
  if (err) return console.log("Error in running server ", err);

  console.log(`Server is running on http://localhost:${port}`);
});
