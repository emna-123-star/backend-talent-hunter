// models/jobApplicationModel.js

const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  applicantEmail: {
    type: String,
    required: true,
  },
  applicantName: {
    type: String,
    required: true,
  },
  cv: {
    type: String, // URL or path to the CV
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
});

const JOBApplication = mongoose.model("JOBApplication", jobApplicationSchema);

module.exports = JOBApplication;
