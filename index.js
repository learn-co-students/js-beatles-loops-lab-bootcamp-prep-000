function theBeatlesPlay(musicians, instruments) {
  var bandPlays = []
  for (let i = 0; i < musicians.length; i++) {
    bandPlays.push(musicians[i] + " plays " + instruments[i])
    
  }
  return bandPlays
}

function johnLennonFacts(facts) {
  var factsB = []
  var i = 0
  while (i < facts.length) {
     factsB.push(facts[i] + "!!!")
     i++;
    
  }
  return factsB
}

function iLoveTheBeatles(n) {
  var array = []

  do {
    array.push("I love the Beatles!"); n++;
  }
  while (n < 15);
  return array
}

  
