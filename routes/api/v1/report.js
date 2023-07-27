// Routes for managing patient reports

const router = require("express").Router();

const reportContoller = require("../../../controllers/report_controller");
const Report = require("../../../models/report");

// GET all patient reports
router.get("/", async (req, res) => {
  console.log("patients get");
  const patient = await Report.find({});

  return res.json({ message: "patients get all report", patient });
});

// GET patient reports by status
router.get("/:status", reportContoller.status);

module.exports = router;
