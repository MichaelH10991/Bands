var Event = require("./events.model")

// Get list of all events
exports.index = (req, res) => {
  Event.find(function(err, events) {
    if (err) {
      return handleError(res, err)
    }
    return res.status(200).json(events)
  })
}
// nuke the database
exports.nuke = (req, res) => {
  Event.deleteMany({}, err => {
    if (err) {
      return handlerError(res, err)
    }
    return res.status(200).send(`data nuked!`)
  })
}
// submit an event
exports.submit = (req, res) => {
  let eventData = new Event(req.body)
  eventData
    .save()
    .then(item => {
      console.log(`saved to database: ${item}`)
    })
    .catch(err => console.error(`unable to send item: ${err}`))
}
// handle the errors
function handleError(res, err) {
  return res.send(500, err)
}
