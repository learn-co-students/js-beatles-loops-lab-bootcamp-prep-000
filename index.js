function theBeatlesPlay(musician, instrument) {
  var array = []
  for (var i = 0; i < musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array
}


function johnLennonFacts (facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i].concat("!!!")
    i++
  }
  return facts
}


function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}
