// controllers/jobController.js

const Job = require("../models/jobModel");

// Créer un nouveau job
exports.addJob = async (req, res) => {
  try {
    const {
      jobId,
      jobName,
      description,
      keywords,
      requirements,
      position,
      startDate,
      deadline,
    } = req.body;

    const newJob = new Job({
      jobId,
      jobName,
      description,
      keywords,
      requirements,
      position,
      startDate,
      deadline,
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir tous les jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un job par ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un job
exports.editJob = async (req, res) => {
  try {
    const {
      jobName,
      description,
      keywords,
      requirements,
      position,
      startDate,
      deadline,
    } = req.body;
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      {
        jobName,
        description,
        keywords,
        requirements,
        position,
        startDate,
        deadline,
      },
      { new: true }
    );

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
