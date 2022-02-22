const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  word: {
    type: String,
    trim: true,
    required: true,
  },
});

const Test = mongoose.model('Test', testSchema);

exports.Test = Test;