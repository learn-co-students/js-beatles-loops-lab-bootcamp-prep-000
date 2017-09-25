function theBeatlesPlay(musicians, instruments) {
  var array = [];
for (var i = 3; i > -1; i -= 1) {
  array.unshift(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  while ( i < facts.length){
    facts[i] = (facts[i] + "!!!")
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var i = 0
  var array = []
  do{array.push('I love the Beatles!')
  i++
} while (i <= number && number != 17)
  return array
}
