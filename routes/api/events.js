const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

const controller = require("./events.controller")

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/bandsDB`, {
  useNewUrlParser: true
})

let db = mongoose.connection

db.on("error", console.error.bind(console, "connection error: "))

let {
  getAllEvents,
  deleteAllEvents,
  createEvent,
  testData
} = require("../../database_config/database_methods.js")

// TODO
// let get_event = require("./database_config/get_event.js")
// let update_event = require("./database_config/update_event.js")

// app.post("/api/create", (req, res) => {
//   console.log(req.body)

//   createEvent(req.body)
// })

/**
 * TODO
 * - error code handling
 * - delete
 * - ORM for mongo
 *
 *  */

router.get("/", controller.index)
router.delete("/", controller.nuke)
router.post("/", controller.submit)

router.delete("/", (req, res) => {
  console.log("delete")
})
module.exports = router
