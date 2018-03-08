function theBeatlesPlay(arrayMuscians,arrayInstruments) {
  var beatles = []
  for(var i=0;i<arrayMuscians.length;i++) {
    beatles.push(`${arrayMuscians[i]} plays ${arrayInstruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(array) {
  var i=0
  while(array.length>i) {
    array[i] = array[i]+'!!!'
    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  var love =[]
  do {
    love.push('I love the Beatles!')
    n++
  } while(n<15)
  return love
}