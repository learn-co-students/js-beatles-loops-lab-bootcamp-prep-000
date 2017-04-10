function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var n = 0; n < musicians.length; n++) {
    array.push(musicians[n] + " plays " + instruments[n])
  }
  return array
}

function johnLennonFacts(facts) {
  var n = 0
  while(n < facts.length) {
    facts[n] = facts[n] + "!!!";
    var n = n + 1
  } 
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n += 1
  } while (n < 15)
  return array
}