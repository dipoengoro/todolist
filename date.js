exports.getDate = function () {
  let date = new Date()
  let currentDay = date.getDay()

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }

  return date.toLocaleDateString('id-ID', options)
}
