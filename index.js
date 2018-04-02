var theBeatlesPlay = (musicians, instruments) => {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

var johnLennonFacts = facts => {
  var i = 0
  while (i !== facts.length) {
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}

var iLoveTheBeatles = n => {
  var array = []
  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15) {

  }
  return array
}
