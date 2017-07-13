function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var index = 0; index < musicians.length; index++) {
    array.push(`${musicians[index]} plays ${instruments[index]}`)
  }
  return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  for(var index = 0; index < facts.length; index++){
    facts[index] = facts[index] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n = n + 1
  } while (n > 0 && n < 15)
  return array
}
