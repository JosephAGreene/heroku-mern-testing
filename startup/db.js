require( 'dotenv' ).config();
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`Connected to database...`));
}