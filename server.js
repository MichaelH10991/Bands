const express = require("express")
const environment = require("dotenv").config()
const path = require("path")
const app = express()
const bodyParser = require("body-parser")
const db = require("./db/db.connection")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

db.on('connected', () => {
  console.log('Database connection established')
})

db.once('open', () => {
  console.log(`Database connection open`)
})

db.on('disconnected', () => {
  console.log("Mongoose default connection is disconnected")
})

db.on("error", (err) => {
  console.log(`Connection error: ${err}`)
})

process.on('SIGINT', () => {
  db.close(() => {
    console.log(termination("Mongoose default connection is disconnected due to application termination"))
    process.exit(0)
  })
})

const PORT = process.env.PORT || process.env.API_PORT

// route for index page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/views/index.html"))
})

// set route for static folder
app.use("/public", express.static(path.join(__dirname, "public")))

// Middleware
app.use("/api/events", require("./routes/api/events"))

// listen on port
app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
