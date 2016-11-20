function theBeatlesPlay(musicians, instruments) {
  var dope = []
for ( var i = 0; i < 4; i++) {
dope.push(`${musicians[i]} plays ${instruments[i]}`)

}
return dope
}
function johnLennonFacts(facts) {
const newFacts = []

let i = 0

while (i < facts.length) {
  newFacts.push(`${facts[i]}!!!`)
  i++
}
return newFacts
}

function iLoveTheBeatles(n) {
  var array = []
  do { array.push("I love the Beatles!")
  n++ }
  while( n < 15 )

  return array
}
