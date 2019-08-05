const express = require("express")
const router = express.Router()
const controller = require("./events.controller")

// get all events
router.get("/", controller.index)
// get one event
router.get("/:name", controller.collect)
// not quite sure
router.get("/:date")
// create an event
router.post("/", controller.submit)
// delete all events
router.delete("/", controller.nuke)
// remove single event by id
router.delete('/:id', controller.remove)

module.exports = router
