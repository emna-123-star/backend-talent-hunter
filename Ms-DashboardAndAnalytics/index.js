const express = require('express');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
app.use(express.json());

// Middleware pour les routes du dashboard
app.use('/api', dashboardRoutes);

const PORT = process.env.PORT || 3005
;
app.listen(PORT, () => {
  console.log(`Dashboard and Analytics service is running on port ${PORT}`);
});
