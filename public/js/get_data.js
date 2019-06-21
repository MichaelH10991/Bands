async function get_data() {
  let res = await fetch("http://localhost:8081/api/bands")
  let data = await res.json()
  console.log(data)
  create_table(data)
}
get_data().catch(err => {
  console.log(`There was a fetch error: ${err}`)
})

function create_table(data) {
  // create table header
  let col = []
  for (let i = 1; i < data.length; i++) {
    for (let key in data[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key)
      }
    }
  }
  console.log(col)

  // get table from DOM
  var table = document.getElementById("data_table")

  // create html table header row using the extracted headers above

  var tr = table.insertRow(-1)

  for (var i = 2; i < col.length; i++) {
    var th = document.createElement("th")
    th.innerHTML = col[i]
    tr.appendChild(th)
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < data.length; i++) {
    tr = table.insertRow(-1)

    for (var j = 2; j < col.length; j++) {
      var tabCell = tr.insertCell(-1)
      tabCell.innerHTML = data[i][col[j]]
    }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById("table-container")
  divContainer.innerHTML = ""
  divContainer.appendChild(table)
}