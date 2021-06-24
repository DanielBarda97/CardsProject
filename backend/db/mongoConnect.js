const mongoose = require('mongoose');
const { config } = require('../config/secretData');
// mongoose.connect('mongodb://localhost:27017/hipo5', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(`mongodb+srv://${config.atlsUser}:${config.atlsPass}@danielbarda.ljf6q.mongodb.net/hipo5`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo connected");
  // we're connected!
});

module.exports = db;
