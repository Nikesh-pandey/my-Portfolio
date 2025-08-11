  const express = require('express');
  const app = express();
  const mongoose = require('mongoose');
  require('dotenv').config();
  const PORT = process.env.PORT || 3000;
  // Middleware
  app.use(express.json());

  // Routes
  const Adminroute = require('./routes/routes');
  app.use('/auth', Adminroute);
  app.use('/', Adminroute);
  app.use('/api', Adminroute);

  // DB connection
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connected successfully");
      app.listen(PORT, () => {
        console.log("The server has started at port", PORT);
      });
    })
    .catch((err) => {
      console.log("An error occurred while connecting to DB:", err);
    });

