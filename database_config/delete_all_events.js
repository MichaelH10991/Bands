module.exports = function(req, res) {
  let config = require("./config")
  let MongoClient = require("mongodb").MongoClient

  // database config
  let url = config.database_url
  let database_name = config.database_name
  let table = config.collection_name

  MongoClient.connect(url, function(err, db) {
    if (db) {
      if (err) throw err
      var dbo = db.db(database_name)
      dbo.collection(table).drop(function(err, delOK) {
        if (err) throw err
        if (delOK) console.log("Collection deleted")
        db.close()
      })
    }
    res.send("Collection Deleted")
  })
}
