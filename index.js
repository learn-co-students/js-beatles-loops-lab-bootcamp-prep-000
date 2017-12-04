function theBeatlesPlay(musicians, instruments) {
  var theBeatles = []
  for (var i = 0; i < musicians.length; i++) {
    theBeatles.push(musicians[i] + ' plays ' + instruments[i])
  }
  return theBeatles
}

function johnLennonFacts(facts) {
  var excitedArray = [];
  var i = 0;
  while (excitedArray.length < facts.length) {
    excitedArray.push(facts[i] + "!!!");
    i++;
  }
  return excitedArray;
}

function iLoveTheBeatles(n) {
  var loveArray = []
  do {
    loveArray.push('I love the Beatles!')
    n++
  } while (n < 15)
  return loveArray
}
