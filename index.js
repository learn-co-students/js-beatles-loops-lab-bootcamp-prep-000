function theBeatlesPlay(musicians, instruments) {
  var play = [];
  for (let i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return play;
}

function johnLennonFacts(facts) {
  var i = 0;
  var exclamation = [];
  while (i < facts.length) {
    exclamation.push(`${facts[i++]}!!!`);
  }
  return exclamation;
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return love;
}
