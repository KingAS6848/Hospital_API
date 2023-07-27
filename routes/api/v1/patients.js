// Routes for managing patient data

const express = require("express");
const router = express.Router();
const Patient = require("../../../models/patient");
const passport = require("passport");
const patientController = require("../../../controllers/patient_controller");

// GET all patients
router.get("/", async (req, res) => {
  console.log("patients get");
  const patients = await Patient.find({});
  return res.send(patients);
});

// POST request for patient registration
router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientController.register
);

// POST request for creating a report for a specific patient
router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  patientController.createReport
);

// GET all reports for a specific patient
router.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  patientController.allReports
);

module.exports = router;


