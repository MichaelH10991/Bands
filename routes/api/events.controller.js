let Event = require("../../models/events.model")

// Get list of all events
exports.index = (req, res) => {
  Event.find(function (err, events) {
    if (err) {
      return handleError(res, err)
    }
    return res.status(200).json(events)
  }).sort({ date: 1 })
}

// submit an event
exports.submit = (req, res) => {
  let eventData = new Event(req.body)
  eventData.save(err => {
    if (err) return handleError(res, err)
    return res.status(200)
  })
}

// get a single event
exports.collect = (req, res) => {
  // console.log(req.params)
  Event.find({ name: req.params.name }, (err, Event) => {
    if (err) return handleError(res, err)
    if (!Event) return res.send(404)
    return res.send(Event)
  })
}

exports.update = ({ body }, res) => {
  if (body.id) {
    delete body.id
  }
}

// nuke the database
exports.nuke = (req, res) => {
  Event.deleteMany({}, err => {
    if (err) return handlerError(res, err)
    return res.status(200).send(`data nuked!`)
  })
}

// handle the errors
function handleError(res, err) {
  return res.status(500).send(err)
}
