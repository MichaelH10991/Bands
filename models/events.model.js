let mongoose = require("mongoose")
let Schema = mongoose.Schema

// create a schemas for our database
let supportSchema = new Schema({ name: 'string' });

let eventSchema = new Schema({
  name: { type: String, required: true },
  support: [supportSchema],
  city: { type: String, required: true },
  venue: { type: String, required: true },
  date: { type: Date, required: true },
  day: { type: String, required: true },
  notes: { type: String, required: true }
})

module.exports = Event = mongoose.model("Event", eventSchema)
