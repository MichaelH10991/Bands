let express = require("express")
let environment = require("dotenv").config()
let path = require("path")
let app = express()
let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT || process.env.SERVER_PORT

// route for index page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/views/index.html"))
})

// set route for static folder
app.use("/public", express.static(path.join(__dirname, "public")))

// events API route
app.use("/api/events", require("./routes/api/events"))

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
