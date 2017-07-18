function theBeatlesPlay(musicians, instruments) {
  const lineup = [];

  for (let i = 0; i < musicians.length && i < instruments.length; i++) {
    lineup.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return lineup;
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
  let messages = [];

  do {
    messages.push('I love the Beatles!');
    n++;
  } while(n < 15);

  return messages;
}
