function theBeatlesPlay(musicians, instructions) {
  var empty = new Array();
  for(var i=0; i<musicians.length; i++) {
    empty.push(musicians[i] + ' plays ' + instructions[i]);
  }
  return empty;
}

function johnLennonFacts(facts) {
  var count = 0
  while(count<facts.length) {
    facts[count] = facts[count++] + '!!!'
  }
  return facts
}

function iLoveTheBeatles(n) {
  var empty = new Array();
  do {
    empty.push('I love the Beatles!')
    n++
  } while(n<15)
  return empty
}
