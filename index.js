// add solution here
var i = 0

function theBeatlesPlay(musicians, instruments){
  var empty = [ ]
  for (i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i])
  }
return empty
}


function johnLennonFacts(facts){
  var n = 0
  while (n < facts.length) {
    facts[n] = (facts[n] + "!!!")
    n++
  }
  return facts
}

function iLoveTheBeatles(j){
  var empty2 = []
  do {
    empty2.push("I love the Beatles!")
    j++
  }
  while (j < 15);
  return empty2
}