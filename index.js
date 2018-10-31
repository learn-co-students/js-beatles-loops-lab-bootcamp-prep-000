// add solution here
function theBeatlesPlay(musicians, instruments) {
  var play = [];

  for (let i = 0; i < musicians.length; i++) {
    play.push(musicians[i] + " plays " + instruments[i]);
  }
  return play;
}

function johnLennonFacts(facts) {
  var funFacts = [];
  var i = 0;

  while (i < facts.length) {
    funFacts[i] = facts[i] + "!!!";
    i++;
  }
  return funFacts;
}

function iLoveTheBeatles(n) {
  var love = [];

  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15)

  return love;
}
