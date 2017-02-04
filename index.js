function theBeatlesPlay(mus,inst) {
  var result = []
  for (var i=0; i < mus.length; i++) {
    result.push(mus[i] + ' plays '+inst[i])
  }
  return result
}

function johnLennonFacts(array) {
  var facts = []
  var i = 0
  while (i < array.length) {
    facts.push(array[i] + '!!!');
    i++;
  }
  return facts
}

function iLoveTheBeatles(n) {
  var result = []
  do {
    result.push('I love the Beatles!');
    n++;}
    while (n<15)
  return result
}