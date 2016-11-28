function theBeatlesPlay(musicians, instruments){
  var roles = []
  for (var i = 0; i < musicians.length; i++) {
    roles.push(`${musicians[i]} plays ${instruments[i]}` )
  }
  return roles
}
function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while (i < facts.length)  {
array.push(`${facts[i]}!!!`)
i++
  }
  return array
}

function iLoveTheBeatles (i) {
var array = []
do {
  array.push("I love the Beatles!")
  i++
} while (i < 15);
return array
}
