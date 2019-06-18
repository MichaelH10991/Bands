var express = require("express")
var path = require("path")
var app = express()

var PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"))
})

app.use("/static", express.static(path.join(__dirname, "public")))

app.listen(PORT)

console.log("app listening on port", PORT)
