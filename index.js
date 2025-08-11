const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import your routes
const Adminroute = require('./routes/routes');

// Mount routes at /api
app.use('/api', Adminroute);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL,)
.then(() => {
  console.log("Database connected successfully");

  // Start server after DB connection is successful
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("Error connecting to DB:", err);
});
