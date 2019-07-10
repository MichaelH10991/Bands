const express = require("express")
const router = express.Router()

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

router.get("/", (req, res) => {
  getAllEvents(req, res)
})

router.post("/", (req, res) => {
  console.log(req.body)

  createEvent(req.body)
})

module.exports = router
