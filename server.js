let express = require("express")
let environment = require("dotenv").config()
let path = require("path")
let app = express()
let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let {
  getAllEvents,
  deleteAllEvents,
  createEvent,
  testData
} = require("./database_config/database_methods.js")

// TODO
// let get_event = require("./database_config/get_event.js")
// let update_event = require("./database_config/update_event.js")

let PORT = process.env.PORT || process.env.SERVER_PORT

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/views/index.html"))
})

app.post("/api/create", (req, res) => {
  console.log(req.body)

  createEvent(req.body)
})

app.route("/api/bands").get((req, res) => {
  getAllEvents(req, res)
})

app.route("/api/delete_all").get((req, res) => {
  deleteAllEvents(req, res)
})

app.route("/api/test").get((req, res) => {
  testData(req, res)
})

app.use("/public", express.static(path.join(__dirname, "public")))

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
