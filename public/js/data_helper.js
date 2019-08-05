let data = async function get_data() {
  let res = await fetch("/api/events")
  let data = await res.json()
  return data
}
get_data().catch(err => {
  console.log(`There was a fetch error: ${err}`)
})

let event = async function (name) {
  let res = await fetch(`/api/events/${name.value}`)
  let data = await res.json()
  writeToDocument(data)
}

export { data, event }