function theBeatlesPlay(musc, inst) {
  var empty = []
  for (var i = 0; i < musc.length; i++) {
    empty.push(musc[i] + " plays " + inst[i])
  } 
  return empty
}

function johnLennonFacts(facts) {
  var x = 0;
  while (x<facts.length) {
    for (var i=0; i< facts.length; i++) {
      facts[i] = facts[i] + "!!!"
    }
    return facts
  }
}

function iLoveTheBeatles(number) {
  var nothing = [];
  do {
    nothing.push("I love the Beatles!");
    number++
  }
  while (number<15);
  return nothing
  }
