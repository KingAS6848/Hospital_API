const Doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");

// Doctor Registration
module.exports.register = async (req, res) => {
  try {
    // Check if the password matches the confirm_password field
    if (req.body.password != req.body.confirm_password) {
      return res.status(400).json({
        message: "Password does not match",
      });
    }

    // Check if the given phone number already exists
    let doctor = await Doctor.findOne({ phone: req.body.phone });

    if (doctor) {
      // Doctor already exists with the given phone number
      console.log(doctor);
      return res.status(400).json({ message: "Doctor already exists" });
    } else {
      // Create a new doctor with the provided data
      await Doctor.create(req.body);

      return res.status(200).json({
        message: "New Doctor registered",
      });
    }
  } catch (err) {
    console.log("Error in doctor registration ", err);

    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};

// Doctor Login
module.exports.login = async (req, res) => {
  try {
    // Check if the doctor is registered with the provided phone number
    let doctor = await Doctor.findOne({ phone: req.body.phone });

    if (!doctor || doctor.password != req.body.password) {
      return res.status(422).json({ message: "Invalid username or password" });
    }

    console.log("Logged in");

    return res.status(200).json({
      message: "Sign-in successful",
      data: {
        token: jwt.sign(doctor.toJSON(), "hospital", { expiresIn: "11000000" }),
      },
    });
  } catch (err) {
    console.log(`Error in doctor login, ${err}`);

    return res.json(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};
