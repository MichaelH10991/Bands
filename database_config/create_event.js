let config = require("./config")
let MongoClient = require("mongodb").MongoClient

let root_url = config.database_url
let database = config.database_name
let col = config.collection_name

let url = root_url + database

module.exports = function(req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err
    let dbo = db.db(database)
    dbo.collection(col).insert(data, (err, res) => {
      if (err) throw err
      console.log("Number of documents inserted: " + res.insertedCount)
      db.close()
    })
  })
}
