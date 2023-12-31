const express = require("express");
const router = express.Router();


// doctors route
router.use("/doctors", require("./doctors"));

// patients route
router.use("/patients", require("./patients"));

// reports
router.use("/reports", require("./report"));

module.exports = router;