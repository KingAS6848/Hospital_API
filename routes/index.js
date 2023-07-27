// Parent Router for Hospital API

const express = require("express");
const router = express.Router();

// Welcome route for the root path
router.get("/", (req, res) => res.send("Welcome to Hospital API"));

// Mounting the "api" routes under the "/api" endpoint
router.use("/api", require("./api"));

module.exports = router;
