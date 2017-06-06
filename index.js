function theBeatlesPlay(musicians, instruments) {
  var array =[]
  for (var i = 0; i < musicians.length; i++) {
    // our logic will go here
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
var array =[]
  while (facts.length > 0) {
    var newFacts = facts.shift()
    array.push(`${newFacts}!!!`)
  }
  return array
}

function iLoveTheBeatles(n) {
  var array= []
  do {
    array.push('I love the Beatles!')
    n++
} while (n<15);
return array
}
