// add solution here
function theBeatlesPlay(musician, instrument) {
  var beatles = [];
  for (var i = 0; i < musician.length; i++) {
    beatles.push(musician[i] + " plays " + instrument[i])
  }
  return beatles;
}

function johnLennonFacts(facts) {
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}

function iLoveTheBeatles(number) {
  var beatlesMessage = [];
  do {
    beatlesMessage.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return beatlesMessage;
}