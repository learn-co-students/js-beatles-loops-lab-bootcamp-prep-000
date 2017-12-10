function theBeatlesPlay (musician, instrument) {
  var array = []
  for (i = 0; i < musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array
}
