let Event = require("../../models/events.model")

exports.ping = (req, res) => {
  res.status(200).json({ version: process.env.API_VERSION })
}

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
  console.log(`api received POST request to submit event: ${eventData}`)
  eventData.save(err => {
    if (err) return handleError(res, err)
    return res.status(200)
  })
}

// get events by name
exports.collect = (req, res) => {
  let eventName = req.params.name
  console.log(`api received GET request for: ${eventName}`)
  Event.find({ name: eventName }, (err, Event) => {
    console.log(`the event from api:`, Event)
    if (!Event.length) return res.status(404).send('Event not found')
    if (err) return handleError(res, err)
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
  if (err.errors.date.name === 'CastError') return res.status(406).send("Cast error")
  if (err.name === 'ValidationError') return res.status(400).send("Form validation error")
  return res.status(500).send(err)
}
