// add solution here

function theBeatlesPlay(musician, instrument) {
  var theBeatles = [];
  for (var i = 0; i < 4; i++) {
    theBeatles.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return theBeatles;
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
  var loveMessage = [];
  do {
    loveMessage.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return loveMessage;
}