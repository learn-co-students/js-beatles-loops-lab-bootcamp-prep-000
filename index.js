function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0;  i < musicians.length; i++) {
    var musician = musicians[i]
    var instrument = instruments[i]
    var fact = `${musician} plays ${instrument}`
    newArray.push(fact)
  }
  return newArray
}

function johnLennonFacts(facts) {
  var newArray = []
  var n = 0
  while (n < facts.length) {
    var newString = facts[n] + "!!!"
    newArray.push(newString)
    n++
  }
  return newArray
}

function iLoveTheBeatles(num) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return newArray
}