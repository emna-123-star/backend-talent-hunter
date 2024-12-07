// routes/jobRoutes.js

const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

router.post("/jobs", jobController.addJob); // Ajouter un job
router.get("/jobs", jobController.getAllJobs); // Obtenir tous les jobs
router.get("/jobs/:id", jobController.getJobById); // Obtenir un job par ID
router.put("/jobs/:id", jobController.editJob); // Mettre à jour un job
router.delete("/jobs/:id", jobController.deleteJob); // Supprimer un job

module.exports = router;
