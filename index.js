
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < 4; i++) {
    array.push( ``+ musicians[i] + ` plays ` + instruments[i] + `` )
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  let countup = 0
  while (countup < facts.length) {
    array.push( `` + facts[countup++] + `!!!` )
  } 
 return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}