function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var lennonFacts = [];
  var numOfFacts = facts.length;
  while (numOfFacts !== 0) {
    lennonFacts.unshift(facts[numOfFacts-1] + "!!!");
    numOfFacts--;
  }
  return lennonFacts;
}

function iLoveTheBeatles(number) {
  var beatlesFan = [];
  do {
    beatlesFan.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return beatlesFan;
}