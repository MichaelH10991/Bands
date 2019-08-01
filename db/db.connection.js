const mongoose = require("mongoose")
const config = require('./db.config');
const database = config.database
const secret = config.secret

let mongooseOptions = {
  reconnectInterval: 500,
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true
};

mongoose.connect(database, mongooseOptions).then(
  () => {
    console.log(`connection to ${database}`)
  }, err => {
    //*** put timeout here ?? */
    // logger.error('mongodb first connection failed: ' + err.stack)
    console.log(`first connection to the database failed: ${err}`)
    // process.exit(0)
  }
)

db = module.exports = mongoose.connection