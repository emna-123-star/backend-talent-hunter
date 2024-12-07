// controllers/jobApplicationController.js

const JOBApplication = require("../models/jobApplicationModel");
const upload = require("../config/multerConfig");

// Ajouter une nouvelle application
exports.addApplication = [
  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "coverLetter", maxCount: 1 },
  ]), // Pour gérer les deux fichiers
  async (req, res) => {
    try {
      const { jobId, applicantEmail, applicantName, phoneNumber } = req.body;
      const cv = req.files["cv"][0].filename;
      const coverLetter = req.files["coverLetter"]
        ? req.files["coverLetter"][0].filename
        : "";

      const newApplication = new JOBApplication({
        jobId,
        applicantEmail,
        applicantName,
        cv,
        phoneNumber,
        coverLetter,
      });

      await newApplication.save();
      //envoi un mail pour le user
      //application f job x est bien récu
      res.status(201).json(newApplication);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
];

// Obtenir toutes les applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await JOBApplication.find().populate("jobId");
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir les applications d'un utilisateur spécifique par email ou ID
exports.getMyApplications = async (req, res) => {
  try {
    const { email, id } = req.query;
    let applications;
    if (email) {
      applications = await JOBApplication.find({ applicantEmail: email });
    } else if (id) {
      applications = await JOBApplication.find({ _id: id });
    }
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir les applications pour un job spécifique
exports.getApplicationByJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const applications = await JOBApplication.find({ jobId }).populate("jobId");
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
