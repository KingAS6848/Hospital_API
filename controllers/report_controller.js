// Controller to Get Reports by Status

const Report = require("../models/report");

module.exports.status = async (req, res) => {
  try {
    console.log("Fetching reports with status");

    // Find all reports with the specified status and populate patient and doctor details
    let reports = await Report.find({ status: req.params.status })
      .populate({
        path: "patient",
        select: "name address phone",
      })
      .populate({
        path: "doctor",
        select: "name _id",
      });

    if (reports && reports.length !== 0) {
      return res.status(200).json({
        message: `List of all reports with status ${req.params.status}`,
        reports: reports,
      });
    } else {
      return res.status(409).json({
        message: `No report with status: ${req.params.status}`,
      });
    }
  } catch (err) {
    console.log("Error fetching status reports: ", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
