function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts(facts) {
  var wowFacts = [];
  while(facts.length > 0) {
    wowFacts.push(facts[0] + '!!!');
    facts = facts.slice(1);
  }
  return wowFacts;
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n += 1;
  } while(n < 15);
  return love;
}