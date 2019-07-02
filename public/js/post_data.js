// $("#event_form").submit(e => {
//   e.preventDefault()
//   $.post({
//     url: "/api/create",
//     type: "post",
//     data: $("#event_form").serialize(),
//     success: () => {
//       console.log("POST success")
//       location.reload(true)
//     }
//   })
// })

let obj = {
  name: document.getElementById("input1").innerHTML,
  support: document.getElementById("input2"),
  city: document.getElementById("input3"),
  venue: document.getElementById("input4"),
  date: document.getElementById("input5"),
  day: document.getElementById("input6"),
  notes: document.getElementById("input7")
}
console.log(obj)

postData("http://localhost/api/create", obj)
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error))

function postData(url = "", data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => response.json()) // parses JSON response into native JavaScript objects
}
