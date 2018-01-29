function theBeatlesPlay(musicians, instruments) {
  var theFirstAnswer = []
  for (let i = 0; i < 4; i++) {
    theFirstAnswer.push(`${musicians[i]} plays ${instruments[i]}`)
  } return theFirstAnswer
}


function johnLennonFacts(facts) {
  var theSecondAnswer = []
  let i = 0
  while (i < facts.length) {
    theSecondAnswer.push(`${facts[i]}!!!`)
    i++
  } return theSecondAnswer
}


function iLoveTheBeatles(number) {
  var theThirdAnswer = []
  let i = number
  do {theThirdAnswer.push("I love the Beatles!")
  i++
} while (i < 15);
  return theThirdAnswer
}