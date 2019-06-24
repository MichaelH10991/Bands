let config = require("./config")
let MongoClient = require("mongodb").MongoClient

// database config
let url = config.database_url
let database_name = config.database_name
let table = config.collection_name

module.exports = function(req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (db) {
      let dbo = db.db(database_name)
      dbo
        .collection(table)
        .find()
        .sort({ datefield: -1 })
        .toArray((err, result) => {
          if (err) throw err
          res.send(result)
          db.close()
        })
    }
  })
}
