let mongoose = require("mongoose")
let database = `mongodb://localhost/bandsDB`

let mongooseOptions = {
  reconnectInterval: 500,
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true
};

mongoose.connect(database, mongooseOptions).then(
  mongoose => {
    let { name, host, port } = mongoose.connections[0]
    console.log(`connection to mongoDB/${host}:${port}/${name}`)
  }, err => {
    //*** put timeoute here ?? */
    // logger.error('mongodb first connection failed: ' + err.stack)
    console.log(`first connection to the database failed: ${err}`)
    // process.exit(0)
  }
)

// let db = mongoose.connection

db = module.exports = mongoose.connection