let express = require("express")
let path = require("path")
let app = express()
let config = require("./database_config/config")
let MongoClient = require("mongodb").MongoClient

// database config
let url = config.database_url
let database_name = config.database_name
let table = config.collection_name

let PORT = process.env.PORT || 8081

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"))
})

app.route("/api/bands").get((req, res) => {
  get_all_data(req, res)
})

app.use("/public", express.static(path.join(__dirname, "public")))

function get_all_data(req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    let dbo = db.db(database_name)
    dbo
      .collection(table)
      .find()
      .sort({ date: 1 })
      .toArray((err, result) => {
        if (err) throw err
        console.log(result)
        res.send(result)
        db.close()
      })
  })
}

app.listen(PORT)

console.log("app listening on port", PORT)
