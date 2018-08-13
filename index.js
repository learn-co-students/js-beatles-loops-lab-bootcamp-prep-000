// add solution here
var i=0;

function theBeatlesPlay (musicians, instruments) {
  var beatles = [];
  for (i=0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

function johnLennonFacts (facts) {
  var i=facts.length - 1;
  while (i >= 0) {
    facts[i] = facts[i] + "!!!";
    i--;
  }
  return facts;
}

function iLoveTheBeatles (number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return newArray;
}