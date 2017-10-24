function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (var i = 0; i < musicians.length; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band;
}

function johnLennonFacts(facts) {
  var allTheFacts =[];
  var i = 0;
  while (i < facts.length) {
    allTheFacts.push(facts[i] + '!!!'); i++;
  }
  return allTheFacts;
}

function iLoveTheBeatles(number) {
  var crazyFan = [];

  do {
    crazyFan.push("I love the Beatles!"); number++;
  } while (number < 15);
  return crazyFan;
}
