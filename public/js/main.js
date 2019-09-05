const api = "/api/v0.0.1/events"
$(document).ready(() => {
  $("#deleteButton").click(() => {
    $.ajax({
      type: "DELETE",
      url: "/api/v0.0.1/events",
      success: response => {
        if (response == "error") {
          console.error(`there was an error ${response}`)
        } else {
          alert("Data nuked!")
          location.reload()
        }
      }
    })
  })
  $("#deleteOne").click((data) => {
    $.ajax({
      type: "DELETE",
      url: `/api/v0.0.1/events/${data.id}`,
      success: response => {
        if (response == "error") {
          console.error(`there was an error ${response}`)
          console.log(data.id)
        } else {
          alert(data.id)
          location.reload()
        }
      }
    })
  })
})
