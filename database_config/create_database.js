let config = require("./config")
let MongoClient = require("mongodb").MongoClient

let root_url = config.database_url
let database = config.database_name
let collectionName = config.collection_name
// must first create a MongoClient object and specify a connection URL with the correct ip address of the database.
// mongoDB will create a database of it does not exist and creata conneciton to it
let url = `${root_url}${database}`
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    console.log(`there has been an error: ${err}`)
    throw err
  } else {
    console.log(`database: ${database}, created at url ${url}`)
    db.close()
  }
})

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err
  let dbo = db.db(database)
  dbo.createCollection(collectionName, (err, res) => {
    if (err) throw err
    console.log(`collection: ${collectionName}, created!`)
    db.close()
  })
})
