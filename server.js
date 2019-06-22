let express = require("express")
let path = require("path")
let app = express()
let config = require("./database_config/config")
let MongoClient = require("mongodb").MongoClient

let get_all_events = require("./database_config/get_all_events.js")
let delete_all_events = require("./database_config/delete_all_events.js")
// TODO
// let get_event = require("./database_config/get_event.js")
// let update_event = require("./database_config/update_event.js")

let PORT = process.env.PORT || 8081

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/views/index.html"))
})

app.route("/api/bands").get((req, res) => {
  get_all_events(req, res)
})

app.route("/api/delete_all").get((req, res) => {
  delete_all_events(req, res)
})

app.use("/public", express.static(path.join(__dirname, "public")))

app.listen(PORT)

console.log("app listening on port", PORT)
