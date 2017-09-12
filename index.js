function theBeatlesPlay(musicians, instruments) {
  var parts = []
  for (let i = 0; i < musicians.length; i++) {
    parts.push(musicians[i] + " plays " + instruments[i]);
  }
  return parts;
}
function johnLennonFacts(facts) {
  var excitedFacts = [];
var i = 0;
while (i < facts.length) {
  excitedFacts.push(facts[i] + "!!!");
  i++;
}
return excitedFacts;
}

function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return love;
  }
