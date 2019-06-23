let config = require("./config")
let MongoClient = require("mongodb").MongoClient

let root_url = config.database_url
let database = config.database_name
let col = config.collection_name

let url = root_url + database

let data = [
  {
    name: "Band1",
    support: "Support1",
    city: "City1",
    venue: "Venue1",
    datefield: "11/11/1111",
    day: "Tuesday",
    notes: "notes1"
  },
  {
    name: "Band2",
    support: "Support2",
    city: "City2",
    venue: "Venue2",
    datefield: "22/22/2222",
    day: "Tuesday",
    notes:
      "The Quick Brown Fox Jumps Over The Lazy Frog The Quick Brown Fox Jumps Over The Lazy Frog The Quick Brown Fox Jumps Over The Lazy Frog"
  },
  {
    name: "Band2",
    support: "Support2",
    city: "City2",
    venue: "Venue2",
    datefield: "22/22/3000",
    day: "Tuesday",
    notes:
      "This should be at the top becuse this is sorted by date and it is the latest entry"
  }
]

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err
  let dbo = db.db(database)
  dbo.collection(col).insertMany(data, (err, res) => {
    if (err) throw err
    console.log("Number of documents inserted: " + res.insertedCount)
    db.close()
  })
})
