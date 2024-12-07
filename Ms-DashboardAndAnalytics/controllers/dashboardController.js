const axios = require('axios');

// Fonction pour obtenir le nombre total d'utilisateurs
exports.getTotalUsers = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api/getAllUsers');
    const totalUsers = response.data.length;
    res.status(200).json({ totalUsers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fonction pour obtenir les applications par mois
exports.getApplicationsPerMonth = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/jobs'); // Appel à MS-JobAndApplication
    const applications = response.data;

    // Grouper les applications par mois
    const applicationsPerMonth = applications.reduce((acc, application) => {
      const month = new Date(application.appliedDate).getMonth() + 1;
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});

    res.status(200).json({ applicationsPerMonth });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fonction pour obtenir les applications par job
exports.getApplicationsByJob = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/job-applications'); // Appel à MS-JobAndApplication
    const applications = response.data;

    // Grouper les applications par job
    const applicationsByJob = applications.reduce((acc, application) => {
      const jobId = application.jobId;
      acc[jobId] = (acc[jobId] || 0) + 1;
      return acc;
    }, {});

    res.status(200).json({ applicationsByJob });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
