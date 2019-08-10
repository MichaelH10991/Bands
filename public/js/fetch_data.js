
async function get_data() {
  let res = await fetch("/api/events")
  let data = await res.json()
  await create_table(data)
}

get_data().catch(err => {
  console.log(`There was a fetch error: ${err}`)
})


document.getElementById("search").onclick = async function getAnEvent() {
  try {
    let searchParam = await document.getElementById("searchName").value
    let res = await fetch(`/api/events/${searchParam}`)
    if (res.status === 404) {
      alert(`Event "${searchParam}" not found. 
    Note: 
    Search is case sensitive at this time, 
    sorry its a bit shit, but I plan on improving this, bare with.`)
    } else {
      let data = await res.json()
      writeToDocument(data)
    }
  } catch (e) {
    console.log(`there was an error: ${e}`)
  }
}

document.getElementById("submitButton").onclick = async function createEvent() {
  // let event = eventObject()
  let event = eventObject()
  console.log(event)
  try {
    let res = await fetch(`/api/events/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    })
    console.log(res.status)
    switch (res.status) {
      case 200:
        location.reload()
        break;
      case 400:
        alert("There was a problem with your submission, please check the fields and try again.")
        break;
      case 406:
        alert("Looks like the date is in the wrong format.")
        break;
      case 500:
        alert("Something has gone terribly wrong...")
        break;
    }
  } catch (e) {
    console.log(`there was a post error ${e}`)
  }
}

/**
 * Returns an event json.
 */
function eventObject() {
  let keys = []
  let values = []
  // create keys
  for (i = 0; i < 7; i++) {
    let labelId = `label${i}`
    let valueId = `value${i}`
    keys.push(document.getElementById(labelId).innerHTML.toLowerCase())
    values.push(document.getElementById(valueId).value)
  }
  return obj = keys.reduce((obj, k, i) => ({ ...obj, [k]: values[i] }), {})
}

/**
 * Handles writing search result to document.
 * @param {*} data 
 */
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

/**
 * Returns a human readable date.
 * @param {*} date 
 */
function normalizeDate(date) {
  date = date.split("T")
  return date[0]
}

/**
 * Creates cards which contain event data.
 * @param {*} param0 
 */
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

/**
 * Creates a table and fills it with events
 * @param {*} data 
 */
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
