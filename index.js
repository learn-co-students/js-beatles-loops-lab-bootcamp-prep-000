function theBeatlesPlay(musicians, instruments) {
  var musiciansAndInstruments = [];

  for (let i = 0; i < musicians.length; i++) {
    musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return musiciansAndInstruments;
}

function johnLennonFacts(facts) {
  let index = 0;

  while (facts[index]) {
    facts[index] = facts[index] + '!!!'
    index++;
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var list = [];
  do {
    list.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return list;
}
