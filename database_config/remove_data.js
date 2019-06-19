let config = require("./config")
let MongoClient = require("mongodb").MongoClient

let root_url = config.database_url
let database = config.database_name
let col = config.collection_name
let url = root_url + database

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db(database)
  dbo.collection(col).drop(function(err, delOK) {
    if (err) throw err
    if (delOK) console.log("Collection deleted")
    db.close()
  })
})
