function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  const t = musicians.length
  for (var i = 0; i < t; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var excitedFacts = []
  while (facts.length > 0) {
    excitedFacts.push(`${facts[0]}!!!`);
    facts.shift(facts[0]);
  }
  return excitedFacts;
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push('I love the Beatles!');
    n++;
  } while (n < 15);  
  return love;
}
