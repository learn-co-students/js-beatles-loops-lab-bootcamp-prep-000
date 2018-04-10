function theBeatlesPlay(musicians, instruments) {
  var instrumentation = [];
  for (let i = 0; i < musicians.length; i++) {
    instrumentation.push(musicians[i] + " plays " + instruments[i]);
  }
  return instrumentation;
}

function johnLennonFacts(facts) {
  var i = 0;
  var fuckYou = [];
  while (i < facts.length) {
    fuckYou.push(facts[i] + "!!!");
    i++;
    }
    return fuckYou;
}

function iLoveTheBeatles(number) {
  var theBeatles = [];
  do {
    theBeatles.push("I love the Beatles!");
  } while (++number < 15);
  return theBeatles;
}