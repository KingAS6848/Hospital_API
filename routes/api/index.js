// Parent Router for API Versioning

const express = require("express");
const router = express.Router();

// Mounting the "v1" routes under the "/v1" endpoint
router.use("/v1", require("./v1"));

module.exports = router;
