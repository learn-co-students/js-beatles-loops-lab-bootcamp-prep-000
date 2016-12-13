function theBeatlesPlay(musicians, instruments) {
  var beatles = new Array();
  for (let i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts) {
  var counter = 0;
  while (counter < facts.length) {
    facts[counter] = `${facts[counter]}!!!`;
    counter++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var counter = new Array();
  do {
    counter.push("I love the Beatles!");
    n++
  } while (n < 15);
  return counter
}
