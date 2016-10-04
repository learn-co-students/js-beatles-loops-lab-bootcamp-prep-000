function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i]
    array.push(string)
  }

  return array
}

function johnLennonFacts(facts) {
  var x = 0
  while (x < facts.length) {
    facts[x] = facts[x] + "!!!"
    x++
  }

  return facts
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15)

  return array
}
