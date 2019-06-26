let express = require("express")
let path = require("path")
let app = express()
let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let get_all_events = require("./database_config/get_all_events.js")
let delete_all_events = require("./database_config/delete_all_events.js")
let create_event = require("./database_config/create_event.js")
// TODO
// let get_event = require("./database_config/get_event.js")
// let update_event = require("./database_config/update_event.js")

let PORT = process.env.PORT || 8081

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/views/index.html"))
})

app.post("/api/create", (req, res) => {
  console.log(req.body)

  create_event(req.body)
})

app.route("/api/bands").get((req, res) => {
  get_all_events(req, res)
})

app.route("/api/delete_all").get((req, res) => {
  delete_all_events(req, res)
})

app.use("/public", express.static(path.join(__dirname, "public")))

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
