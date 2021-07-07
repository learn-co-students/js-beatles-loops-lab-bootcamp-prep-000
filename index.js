// add solution here
function theBeatlesPlay(musicians, instruments) {
  var output = []

  for (var i = 0; i < musicians.length; i++) {
    output.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return output
}

function johnLennonFacts(facts) {
  var output = []

  for (var i = 0; i < facts.length; i++) {
    output.push(facts[i] + '!!!')
  }

  return output
}

function iLoveTheBeatles(n) {
  var output = []

  do {
    output.push("I love the Beatles!")
  } while (++n < 15)

  return output
}
