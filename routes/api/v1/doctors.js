// Routes for managing doctor data

const express = require("express");
const router = express.Router();
const Doctor = require("../../../models/doctor"); // Assuming the correct model name is "doctor" instead of "patient"
const doctorController = require("../../../controllers/doctor_controller");

// GET all doctors
router.get("/", async (req, res) => {
  const doctors = await Doctor.find({});
  return res.json({
    doctors,
  });
});

// POST request for doctor registration
router.post("/register", doctorController.register);

// POST request for doctor login
router.post("/login", doctorController.login);

module.exports = router;
