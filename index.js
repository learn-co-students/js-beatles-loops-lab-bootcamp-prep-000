// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for (let i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}

function johnLennonFacts(facts) {
  var counter = 0;
  var lennonFacts = [];
  while (counter < facts.length) {
    var fact = facts[counter];
    lennonFacts.push(`${fact}!!!`);
    counter++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(n) {
  var myLove = [];
  do {
    myLove.push("I love the Beatles!");
    n++
  } while (n < 15);
  return myLove;
}