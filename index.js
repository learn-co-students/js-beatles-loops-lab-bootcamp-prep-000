function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i=0; i<4; i++){
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(facts) {
var array = []
let i = 0
while (i < facts.length) {
  array[i] = facts[i] + "!!!"
  i=i+1
}
return array
}

function iLoveTheBeatles(number) {
  var array = []
  let i = 0
  do {
    array[i] = "I love the Beatles!"
    i=i+1
  } while (i+number<15)
  return array
}
