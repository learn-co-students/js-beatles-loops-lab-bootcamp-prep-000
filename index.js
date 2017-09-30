function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (let i = 0; i <= 3; i++ ) {
    var m = musicians[i];
    var inst = instruments[i];
    strings[i] = `${m} plays ${inst}`
  }
  return strings
}

function johnLennonFacts(facts) {
  var l = facts.length
  var newFacts = []
  var incr = 0
  while (incr != l) {
    var f = facts[incr];
    newFacts[incr] = `${f}!!!`;
    incr++
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var loveArray = [];
  do {
    loveArray.push('I love the Beatles!');
    n++
  } while (n < 15);
  return loveArray
}
