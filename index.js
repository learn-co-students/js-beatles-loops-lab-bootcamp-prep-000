function theBeatlesPlay(musicians, instruments) {
  var plays = [];
  for (var i = 0; i < musicians.length; i++ ) {
    plays.push(musicians[i] + " plays " + instruments[i]);
    }
  return plays;
}

function johnLennonFacts(facts) {
let i = 0;
var myFacts = [];
  while(i < facts.length) {
    myFacts.push(facts[i] + "!!!");
    i++;
  }
  return myFacts;
}

function iLoveTheBeatles (n) {
  var love = [];
  do {
    love.push("I love the Beatles!")
    n++;
  } while (n < 15);
  return love;
}
