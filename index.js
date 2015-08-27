module.exports = function(link, value, rel) {
  if (!link) {
    return '<' + value + '>; rel="' + rel + '"'
  }

  return link + ', ' +
         '<' + value + '>; rel="' + rel + '"'
}
