// add solution here
function theBeatlesPlay(musician, instrument) {
  var theBeatles = [];
  for (var i = 0; i < musician.length; i++) {
    theBeatles[i] = `${musician[i]} plays ${instrument[i]}`;
  }
  return theBeatles
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var showMeTheLove = [];

  do {
    showMeTheLove.push("I love the Beatles!");
    n++;
  } while (n < 15);

  return showMeTheLove;
}
