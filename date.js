exports.getDate = function (locale, options) {
  const date = new Date()
  const currentDay = date.getDay()
  return date.toLocaleDateString(locale, options)
}
