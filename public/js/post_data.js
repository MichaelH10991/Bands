let obj = {
  name: document.getElementsByName("name"),
  support: document.getElementsByName("support"),
  city: document.getElementsByName("city"),
  venue: document.getElementsByName("venue"),
  datefield: document.getElementsByName("date"),
  day: document.getElementsByName("day"),
  notes: document.getElementsByName("notes")
}

// async function post_data(obj) {
//   await fetch("https://localhost/api/create", {
//     method: "post",
//     body: JSON.stringify(obj)
//   })
// }

$("#event_form").submit(function(e) {
  e.preventDefault()
  $.ajax({
    url: "/api/create",
    type: "post",
    data: $("#event_form").serialize(),
    success: function() {
      //whatever you wanna do after the form is successfully submitted
    }
  })
})
