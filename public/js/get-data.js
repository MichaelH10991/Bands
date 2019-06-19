fetch("http://localhost:8081/bands")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    create_table(data)
  })

function create_table(data) {
  // EXTRACT VALUE FOR HTML HEADER.
  let col = []
  for (let i = 1; i < data.length; i++) {
    for (let key in data[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key)
      }
    }
  }
  console.log(col)

  // CREATE DYNAMIC TABLE.
  var table = document.getElementById("data_table")

  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1) // TABLE ROW.

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th") // TABLE HEADER.
    th.innerHTML = col[i]
    tr.appendChild(th)
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < data.length; i++) {
    tr = table.insertRow(-1)

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1)
      tabCell.innerHTML = data[i][col[j]]
    }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById("table-container")
  divContainer.innerHTML = ""
  divContainer.appendChild(table)
}
