function theBeatlesPlay(musicians, instruments) {
  let instrumentPlayed = [];
  for (let i = 0; i < musicians.length; i++) {
    instrumentPlayed.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return instrumentPlayed;
}

function johnLennonFacts(facts) {
  let index = 0;
  while (index < facts.length) {
    facts[index] += '!!!';
    index++;
  }
  return facts;
}

function iLoveTheBeatles(times) {
  let loves = [];
  if (times < 15) {
    do {
      loves.push("I love the Beatles!");
      times--;
    } while (times >= 0)
  } else {
    loves.push("I love the Beatles!");
  }
  return loves;
}
