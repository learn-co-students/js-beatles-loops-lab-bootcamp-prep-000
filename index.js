// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (var i = 0; i < musicians.length; i++) {
    var bandMember = `${musicians[i]} plays ${instruments[i]}`
    beatles.push(bandMember)
  }
  return beatles
}

function johnLennonFacts(facts) {
  for (var  i = 0; i < facts.length; i++) {
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