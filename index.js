function theBeatlesPlay(musicians, instruments) {
  var sentences = [];
  for (let i = 0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentences;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var output = [];
  do {
    output.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return output;
}
