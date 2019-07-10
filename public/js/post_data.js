// $(document).ready(() => {
//   $("#event_form").submit(e => {
//     e.preventDefault()
//     $.post({
//       url: "/api/create",
//       type: "post",
//       data: $("#event_form").serialize(),
//       success: () => {
//         console.log("POST success")
//         location.reload(true)
//       }
//     })
//   })
// })

$(document).ready(function() {
  $("#event_form").on("submit", function() {
    location.reload(true)
  })
})

// window.addEventListener("load", () => {
//   let form = document.getElementById("event_form")
//   let formData = new FormData(form)
//   console.log(formData)

//   document.getElementById("submitButton").onclick = createEvent(formData)
// })

// function createEvent() {
//   window.addEventListener("load", () => {
//     let form = document.getElementById("event_form")
//     let formData = new FormData(form)
//     console.log(formData)
//   })
//   let object = {}
//   formData.forEach(function(value, key) {
//     object[key] = value
//   })
//   let json = JSON.stringify(object)
//   console.log(object)
//   postData("http://localhost:8082/api/create", json)
//     .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
//     .catch(error => console.error(error))
// }

// function postData(url = "", data = {}) {
//   // Default options are marked with *
//   return fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, cors, *same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json"
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrer: "no-referrer", // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   }).then(response => response.json()) // parses JSON response into native JavaScript objects
// }
