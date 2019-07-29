let mongoose = require("mongoose")
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/bandsDB`, {
  useNewUrlParser: true
})
let db = mongoose.connection

module.exports = db