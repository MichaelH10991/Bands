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

/**
 * TODO
 * - error code handling (done)
 * - delete (done)
 * - ORM for mongo (done)
 *  */

router.get("/", controller.index)
router.get("/:name", controller.collect)
router.get("/:date")
router.delete("/", controller.nuke)
router.post("/", controller.submit)

module.exports = router
