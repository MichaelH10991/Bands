let mongoose = require("mongoose")
let Schema = mongoose.Schema

// create a schema for our database
let eventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  support: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  }
})

Event = mongoose.model("Event", eventSchema)

module.exports = Event
