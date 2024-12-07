const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard/total-users', dashboardController.getTotalUsers);
router.get('/dashboard/applications-per-month', dashboardController.getApplicationsPerMonth);
router.get('/dashboard/applications-by-job', dashboardController.getApplicationsByJob);

module.exports = router;
