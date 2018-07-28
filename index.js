// add solution here
function theBeatlesPlay(musicians, instruments) {
  var talents = [ ];
  
  for (let i = 0; i < musicians.length; i++) {
    if (i == 0) {
      talents.push("John Lennon plays Guitar");
    } else {
      talents.push(musicians[i] + " plays " + instruments[i]);
    }
  }
  
  return talents;
}

function iLoveTheBeatles(n) {
  var love = [ ];
  
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15);
  
  return love;
}

function johnLennonFacts(facts) {
  var loudFacts = [];
  
  while (facts.length > 0) {
    loudFacts.push(facts.shift() + "!!!");
  }
  
  return loudFacts;
}