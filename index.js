

function theBeatlesPlay(musicians, instruments) {
  var array = []

  for (var i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  var j = facts.length

  while (j > i) {
    array.push(`${facts[i]}!!!`);
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!");
    number++
  } while (number < 15)
    return array
}
