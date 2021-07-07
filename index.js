// add solution here
function iLoveTheBeatles(num) {
  var array = []
  do {
    num++
    array.push("I love the Beatles!")
  } while (num < 15)
  return array
}

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}