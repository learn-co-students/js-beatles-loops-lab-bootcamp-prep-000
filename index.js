// add solution here
var beatles = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < 4 ; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

;

function johnLennonFacts(facts) {
  var johnLennonExclamations = []
  while (facts.length > 0) {
    johnLennonExclamations.push(facts.shift() + "!!!");
  }
  return johnLennonExclamations;
}

function iLoveTheBeatles(num) {
  let arrayOfLove = [];
  do {
    arrayOfLove.unshift("I love the Beatles!");
    num++;
  } while (num < 15)
  return arrayOfLove;
}
