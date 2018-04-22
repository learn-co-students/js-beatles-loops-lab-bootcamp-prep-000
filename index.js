function theBeatlesPlay(musicians, instruments) {
  var array = [] 
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i]
    array[i] = string
  }
  return array
}

function johnLennonFacts(facts) {
  let i = facts.length
  while(i > 0) {
    i--
    facts[i] = facts[i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}