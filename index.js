function theBeatlesPlay(musicians, instruments) {
  var theyPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theyPlay;
}

function johnLennonFacts(facts) {
  var exclaimedFacts = [];
  var i = 0;
  while (i < facts.length) {
    exclaimedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return exclaimedFacts;
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return love;
}