
function theBeatlesPlay (musicians, instruments) {
  var message = []
  var a = 0

  for (a; a < musicians.length; a += 1) {
  message.push(musicians[a] + ' plays ' + instruments[a])
  }
  return message
}


function johnLennonFacts (facts) {
  var a = 0
  var jLFacts = []
  while (a < facts.length) {
    jLFacts.push(facts[a] + '!!!')
    a += 1
  }
  return jLFacts
}


function iLoveTheBeatles (number) {
  var beatles = []
  var a = 0
  do {
    beatles.push("I love the Beatles!")
    a += 1
  }
  while ((a <= number) && (number < 15))

return beatles
}
