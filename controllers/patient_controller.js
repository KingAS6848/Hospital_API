const Patient = require("../models/patient");
const Report = require("../models/report");
const Doctor = require("../models/doctor");

// Patient Registration
module.exports.register = async (req, res) => {
  try {
    // Check if the patient already exists with the given phone number
    let patient = await Patient.findOne({ phone: req.body.phone });

    if (!patient) {
      // Create a new patient with the provided data
      let patient = await Patient.create(req.body);

      return res.status(200).json({
        message: "New Patient Registered",
        patientId: patient._id,
      });
    } else {
      // Patient with the given phone number is already registered
      return res.status(409).json({
        message: "Patient/mobile is already registered",
      });
    }
  } catch (err) {
    console.log("Catch Patient Register", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Create Report
module.exports.createReport = async (req, res) => {
  try {
    // Find the patient by ID
    let patient = await Patient.findById(req.params.id);

    if (patient) {
    
      let doctor = await Doctor.findById(req.body.doctor);

      console.log("doctor", doctor);

      // Create a new report with the provided data
      let data = {
        doctor: req.body.doctor,
        patient: req.params.id,
        status: req.body.status,
        date: req.body.date,
      };

      let report = await Report.create(data);
      patient.reports.push(report);

      patient.save();

      return res.status(200).json({
        message: "Patient Report Created",
      });
    } else {
      return res.status(409).json({
        message: "Patient is not registered",
      });
    }
  } catch (err) {
    console.log("Catch create report error: ", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// Get All Reports for a Patient
module.exports.allReports = async (req, res) => {
  try {
    
    let patient = await Patient.findById(req.params.id).populate({
      path: "reports",
      populate: { path: "doctor", select: "name _id" },
    });

    if (patient) {
      return res.status(200).json({
        message: `Reports of ${patient.name}`,
        reports: patient.reports,
      });
    } else {
      return res.status(409).json({
        message: "The patient is not registered",
      });
    }
  } catch (err) {
    console.log("Catch all report error", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
