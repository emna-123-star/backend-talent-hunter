// app.js

const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/jobRoutes");
const jobApplicationRoutes = require("./routes/jobApplicationRoutes"); // Importer les routes pour les applications

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/MSJobsAndApplication", {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

// MIDDLEWARE
app.use("/uploads", express.static("uploads"));

app.use("/api", jobRoutes);
app.use("/api", jobApplicationRoutes); // Ajouter les routes pour les applications

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
