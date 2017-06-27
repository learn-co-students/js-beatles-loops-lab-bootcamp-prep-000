function theBeatlesPlay(musicians, instruments) {
  var theyPlayed = []
  for(let m = 0; m < musicians.length; m++){
    theyPlayed.push(musicians[m] + " plays " + instruments[m])
  }
  return theyPlayed
}

function johnLennonFacts(facts) {
  var excl = []
  for(let f = 0; f < facts.length; f++){
    excl.push(facts[f] + "!!!")
  }
  return excl
}

function iLoveTheBeatles(num) {
  var empt = []
  do {
    empt.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return empt
}
