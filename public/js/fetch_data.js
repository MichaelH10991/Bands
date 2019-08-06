
async function get_data() {
  let res = await fetch("/api/events")
  let data = await res.json()
  await create_table(data)
}
get_data().catch(err => {
  console.log(`There was a fetch error: ${err}`)
})


document.getElementById("search").onclick = async function getAnEvent() {
  let searchParam = await document.getElementById("searchName").value
  let res = await fetch(`/api/events/${searchParam}`).catch((e) => {
    console.log(e)
  })
  let data = await res.json()
  if (!data.length) {
    alert(`Event "${searchParam}" not found. 
    Note: 
    Search is case sensitive at this time, 
    sorry its a bit shit, but I plan on improving this, bare with.`)
  } else {
    writeToDocument(data)
  }
}

document.getElementById("submitButton").onclick = async function createEvent(name) {
  let event = eventObject()
  let req = await fetch(`/api/events/${name.value}`, { method: 'POST' })
  let data = await res.json()
}

function eventObject() {
  let name = document.getElementById("name").innerText
  let support = document.getElementById("support").innerText
  let city = document.getElementById("city").innerText
  let venue = document.getElementById("venue").innerText
  let date = document.getElementById("date").innerText
  let day = document.getElementById("day").innerText
  let notes = document.getElementById("notes").innerText

  return event = {
    name: name,
    support: support,
    city: city,
    venue: venue,
    date: date,
    day: day,
    notes: notes
  }
}

function writeToDocument(data) {
  let anchor = document.getElementById("data")
  // destroy all child elements
  while (anchor.firstChild) {
    anchor.removeChild(anchor.firstChild)
  }
  // create
  for (i = 0; i < data.length; i++) {
    anchor.appendChild(createCard(data[i], anchor))
  }
}

function normalizeDate(date) {
  date = date.split("T")
  return date[0]
}

function createCard({ _id, name, support, city, venue, date, day, notes }) {
  date = normalizeDate(date)

  // card element`
  let card = document.createElement("div")
  card.className = "w3-card-4 center-content w3-white"

  // container element
  let container = document.createElement("div")
  container.className = "w3-container"

  let heading = document.createElement("h3")

  let tag = document.createElement("span")
  tag.className = "w3-tag tag1"

  let content = document.createElement("p")

  let deleteButton = document.createElement("button")
  deleteButton.innerText = "Delete"

  deleteButton.onclick = async function sendDeleteEvent() {
    alert(`deleting "${name}"`)
    location.reload()
    return request = await fetch(`/api/events/${_id}`, {
      method: 'DELETE'
    })
  }

  heading.textContent = name
  tag.textContent = date
  content.textContent = `${name} played at ${venue}, 
  ${city} on ${day}, ${date}. Supported by 
  ${support}. Here are some notes: ${notes}`

  container.appendChild(heading)
  heading.appendChild(tag)
  container.appendChild(content)
  container.appendChild(deleteButton)

  card.appendChild(container)

  // returns the element
  return card
}

function create_table(data) {
  // create table header
  let cols = ["Name", "Support", "City", "Venue", "Date", "Day", "Notes"]
  let keys = []
  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (keys.indexOf(key) === -1) {
        keys.push(key)
      }
    }
  }

  // get table from DOM
  let table = document.getElementById("data-table")

  // create html table header row using the extracted headers above
  let tr = table.insertRow(-1)

  for (let i = 0; i < cols.length; i++) {
    let th = document.createElement("th")
    th.innerHTML = cols[i]
    tr.appendChild(th)
  }

  // add json data to the table as rows
  for (let i = 0; i < data.length; i++) {
    data[i].date = normalizeDate(data[i].date)
    tr = table.insertRow(-1)
    for (let j = 1; j < keys.length - 1; j++) {
      let tabCell = tr.insertCell(-1)
      tabCell.innerHTML = data[i][keys[j]]
    }
  }

  // finnally add the newly created table with the json data to a container
  let divContainer = document.getElementById("table-container")
  divContainer.innerHTML = ""
  divContainer.appendChild(table)
}
