let Event = require("../../models/events.model")

// Get list of all events
exports.index = (req, res) => {
  console.log(`api received GET request`)
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
  console.log(eventData)
  console.log(`api received POST request to submit event: ${eventData}`)
  eventData.save(err => {
    if (err) return handleError(res, err)
    return res.status(200)
  })
}

// get a single event
exports.collect = (req, res) => {
  let eventName = req.params.name
  console.log(`api received GET request for: ${eventName}`)
  Event.find({ name: eventName }, (err, Event) => {
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
  console.log(`api received DELETE request to delete the database...`)
  Event.deleteMany({}, err => {
    if (err) return handlerError(res, err)
    return res.status(200).send(`data nuked!`)
  })
}

// find by id and remove
exports.remove = (req, res) => {
  let id = req.params._id
  console.log(`api received DELETE request to delete event id: ${id}`)
  Event.findByIdAndDelete({ _id: id }, err => {
    if (err) return handleError(res, err)
    return res.status(200).send('event removed')
  })
}

// handle the errors
function handleError(res, err) {
  console.log(err)
  return res.status(500).send(err)
}
