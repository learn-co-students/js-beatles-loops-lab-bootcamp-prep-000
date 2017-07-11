function theBeatlesPlay(musicians, instruments) {
  var emptyarray = []
  for (var n = 0; n < 4; n++) {
    var string = musicians[n] + ' plays ' + instruments[n]
    emptyarray.push(string)
  }
  return emptyarray
}


function johnLennonFacts(facts) {
  var number = 0
  while(number < facts.length) {
    facts[number] = facts[number] + '!!!'
    number++
  }
  return facts
}


function iLoveTheBeatles(number) {
  var variable = []
  do {variable.push('I love the Beatles!')
    number++
  } while (number < 15)
  return variable
}
