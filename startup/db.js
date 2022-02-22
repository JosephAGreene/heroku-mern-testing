const mongoose = require('mongoose');

module.exports = function() {
  const db = "mongodb+srv://mrjag:3DUc32qfSeMAbaTN@maincluster.aypug.mongodb.net/test?retryWrites=true&w=majority"
  mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`Connected to database...`));
}