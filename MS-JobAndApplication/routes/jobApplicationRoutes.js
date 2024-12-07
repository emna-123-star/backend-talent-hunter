// routes/jobApplicationRoutes.js

const express = require("express");
const router = express.Router();
const jobApplicationController = require("../controllers/jobApplicationController");

// Route pour ajouter une nouvelle application
router.post("/job-applications", jobApplicationController.addApplication);

// Route pour obtenir toutes les applications
router.get("/job-applications", jobApplicationController.getAllApplications);

// Route pour obtenir les applications d'un utilisateur spécifique
router.get("/job-applications/my", jobApplicationController.getMyApplications);

// Route pour obtenir les applications pour un job spécifique
router.get(
  "/job-applications/job/:jobId",
  jobApplicationController.getApplicationByJob
);

module.exports = router;
