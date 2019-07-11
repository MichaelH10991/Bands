let mongoose = require("mongoose")
let Schema = mongoose.Schema

// create a schema for our database
let eventSchema = new Schema({
  name: String,
  support: String,
  city: String,
  venue: String,
  date: Date,
  day: String,
  notes: String
})

let Event = mongoose.model("Event", eventSchema)

module.exports = Event
