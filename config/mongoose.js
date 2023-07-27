const mongoose = require("mongoose");
require('dotenv').config()
// Connect to the MongoDB database
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listener for connection errors
db.on("error", console.error.bind(console, "Error in connecting to the database:"));

// Event listener for successful connection
db.once("open", function () {
  console.log("MongoDatabase connection established successfully");
});

module.exports = db;




