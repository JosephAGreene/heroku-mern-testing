const express = require('express');
const tests = require('../routes/tests');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/test',  tests);
}