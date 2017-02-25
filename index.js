function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (var i=0; i<musicians.length; i++) {
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts (facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles (number) {
  var array = []
  var index = 0
  do {
    array[index] = "I love the Beatles!"
    index++
    number++
  } while (number < 15)
  return array
}
