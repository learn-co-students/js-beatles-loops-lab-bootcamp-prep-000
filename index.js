// add solution here
// theBeatlesPlay
function theBeatlesPlay(musicians, instruments) {
  var phrases = []
  for (let i = 0; i < musicians.length; i++) {
    phrases.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return phrases
}


// johnLennonFacts
function johnLennonFacts(facts) {
  var phrases = []
  for (let i = 0; i < facts.length; i++) {
    phrases.push(`${facts[i]}!!!`)
  }
  return phrases

}


// iLoveTheBeatles
function iLoveTheBeatles(number) {
  function increment() {
    number += 1
    return number
  }
  var phrases = []
  do {
    phrases.push('I love the Beatles!')
  } while (increment() < 15)
return phrases

}
