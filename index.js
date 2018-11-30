// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  var counter = 0;
  for (counter = 0; counter < 4; counter++) {
    beatles.push(musicians[counter] + " plays " + instruments[counter]);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var counter = 0;
  while (counter < facts.length) {
    facts[counter] = facts[counter] + "!!!";
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return array;
}