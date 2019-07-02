let config = require("./config")
let MongoClient = require("mongodb").MongoClient
let environment = require("dotenv").config()

// database config
let url = config.database_url + process.env.DB_NAME
let database_name = config.database_name
let table = config.collection_name

let getAllEvents = function(req, res) {
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
let deleteAllEvents = function(req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
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
function createEvent(data) {
  const event = {
    name: data.name,
    support: data.support,
    city: data.city,
    venue: data.venue,
    datefield: data.date,
    day: data.day,
    notes: data.notes
  }
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err
    let dbo = db.db(database)
    dbo.collection(table).insertOne(event, (err, res) => {
      if (err) throw err
      console.log("Number of documents inserted: " + res.insertedCount)
      db.close()
    })
  })
}

function testData() {
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
    let dbo = db.db(database_name)
    dbo.collection(table).insertMany(data, (err, res) => {
      if (err) throw err
      console.log("Number of documents inserted: " + res.insertedCount)
      db.close()
    })
  })
}

module.exports.getAllEvents = getAllEvents
module.exports.deleteAllEvents = deleteAllEvents
module.exports.createEvent = createEvent
module.exports.testData = testData
