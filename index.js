function theBeatlesPlay(musicians,instruments) {
  var stringArray = [];
  for (let i = 0; i < musicians.length; i++) {
    var mu = musicians[i];
    var ins = instruments[i];
    stringArray.push(`${mu} plays ${ins}`);
  }
  return stringArray;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return love;
}

