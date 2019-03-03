// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newA = []
  for (var i = 0; i < musicians.length; i++) {
    newA.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newA
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] += '!!!';
    i++
  }
  return facts
}

function iLoveTheBeatles (number) {
  var newA = []
  
  do {
    newA.push("I love the Beatles!")
    number++
  } while (number < 15); {
  }
  return newA
}
