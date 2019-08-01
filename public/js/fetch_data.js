async function get_data() {
  let res = await fetch("/api/events")
  let data = await res.json()
  await create_table(data, "data_table", "table-container")
}
get_data().catch(err => {
  console.log(`There was a fetch error: ${err}`)
})

async function getAnEvent(name) {
  let res = await fetch(`/api/events/${name.value}`)
  let data = await res.json()
  writeToDocument(data)
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

function createCard({ name, support, city, venue, date, day, notes }) {
  date = normalizeDate(date)

  // card element`
  let card = document.createElement("div")
  card.className = "w3-card-4 .center-content w3-white"

  // container element
  let container = document.createElement("div")
  container.className = "w3-container"

  let heading = document.createElement("h3")

  let tag = document.createElement("span")
  tag.className = "w3-tag tag1"

  let content = document.createElement("p")

  heading.textContent = name
  tag.textContent = date
  content.textContent = `${name} played at ${venue}, 
  ${city} on ${day}, ${date}. Supported by 
  ${support}. Here are some notes: ${notes}`

  container.appendChild(heading)
  heading.appendChild(tag)
  container.appendChild(content)

  card.appendChild(container)

  // returns the element
  return card
}

function create_table(data, tableName, cont) {
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
  let table = document.getElementById(tableName)

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
  let divContainer = document.getElementById(cont)
  divContainer.innerHTML = ""
  divContainer.appendChild(table)
}
