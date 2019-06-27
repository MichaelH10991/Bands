$("#event_form").submit(e => {
  e.preventDefault()
  $.post({
    url: "/api/create",
    type: "post",
    data: $("#event_form").serialize(),
    success: () => {
      location.reload()
    }
  })
})
