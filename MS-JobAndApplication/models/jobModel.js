// models/jobModel.js

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
    unique: true,
  },
  jobName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keywords: {
    type: [String], // Tableau de mots-clés
    required: true,
  },
  requirements: {
    type: [String], // Tableau de conditions requises
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
