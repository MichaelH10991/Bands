let mongoose = require("mongoose")
let Schema = mongoose.Schema

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
  useNewUrlParser: true
})

let db = mongoose.connection

db.on("error", console.error.bind(console, "connection error: "))

db.once("open", () => {
  console.log("database connected")

  // create a schema for our database
  let eventSchema = new Schema({
    name: String,
    support: String,
    city: String,
    venue: String,
    datefield: { type: Date, default: Date.now },
    day: String,
    notes: String
  })

  let Event = mongoose.model("Event", eventSchema)

  let testEvent = new Event({
    name: "Melvins",
    support: "Redd Fang",
    city: "Birmingham",
    venue: "O2",
    datefield: "12/04/2018",
    day: "Tuesday",
    notes: "It was good!"
  })
  testEvent.save(err => {
    if (err) return console.error("there was an error")
  })
})
