function theBeatlesPlay(muscicians, instruments) {
  var array = []
  for (let i = 0; i < muscicians.length; i++) {
    array.push (muscicians[i] + " plays " + instruments[i]) 
  }
  return array
}

function johnLennonFacts(facts) {
var i = 0
  while (i < facts.length) { 
    facts[i] = facts[i] + "!!!"
    i++
}
return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++; }
    while (n < 15 );
  return array
}
