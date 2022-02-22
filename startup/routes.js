const express = require('express');
const cors = require('cors');
const tests = require('../routes/tests');

module.exports = function(app) {
  // CORS is only necessary while in DEVELOPMENT mode
  if (process.env.MODE !== "PRODUCTION") {
    app.use(cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    }));
  }
  app.use(express.json());
  app.use('/api/test',  tests);
}