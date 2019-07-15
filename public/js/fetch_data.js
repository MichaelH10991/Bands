async function get_data() {
  let res = await fetch("http://localhost:8082/api/events")
  let data = await res.json()
  await create_table(data, "data_table", "table-container")
}
get_data().catch(err => {
  console.log(`There was a fetch error: ${err}`)
})

async function getAnEvent(name) {
  let res = await fetch(`http://localhost:8082/api/events/${name.value}`)
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

function createCard(data) {
  let name = data.name,
    support = data.support,
    city = data.city,
    venue = data.venue,
    date = data.date,
    day = data.day,
    notes = data.notes

  // card element
  let card = document.createElement("div")
  card.className = "w3-card-4 w3-margin w3-white"

  // container element
  let container = document.createElement("div")
  let heading = document.createElement("h3")
  let content = document.createElement("p")

  heading.textContent = data.name
  content.textContent = `${name} played at ${venue} on ${day}, ${date}. Supported by ${support} in ${city}. Here are some notes: ${notes}`
  container.className = "w3-container"

  container.appendChild(heading)
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

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (let i = 0; i < data.length; i++) {
    tr = table.insertRow(-1)

    for (let j = 1; j < keys.length - 1; j++) {
      let tabCell = tr.insertCell(-1)
      tabCell.innerHTML = data[i][keys[j]]
    }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  let divContainer = document.getElementById(cont)
  divContainer.innerHTML = ""
  divContainer.appendChild(table)
}
