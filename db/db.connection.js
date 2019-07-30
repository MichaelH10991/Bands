let mongoose = require("mongoose")
let database = `mongodb://localhost/bandsDB`

mongoose.connect(database, {
  useNewUrlParser: true
})

let db = mongoose.connection

module.exports = db