const express = require("express")
const router = express.Router()
const controller = require("./events.controller")

router.get("/ping", controller.ping)
// get all events
router.get("/events", controller.index)
// get one event
router.get("/events/:name", controller.collect)
// not quite sure
router.get("/:date")
// create an event
router.post("/events", controller.submit)
// delete all events
router.delete("/events", controller.nuke)
// remove single event by id
router.delete('/events/:_id', controller.remove)

module.exports = router
