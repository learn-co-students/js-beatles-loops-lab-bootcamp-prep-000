var musicians = ["John", "Paul", "George", "Ringo"];
var instruments = ["Guitar", "Bass", "Lead", "drums"];

function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!");
    number++
  } while (number < 15);

  return beatles
}
