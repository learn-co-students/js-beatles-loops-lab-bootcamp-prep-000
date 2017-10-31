function theBeatlesPlay(musicians, instruments) {
  var strings = [];

  for (var i = 0; i < musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return strings;
}

function johnLennonFacts(facts) {
  var i = 0;

  while (i < facts.length) {
    facts[i++] += '!!!';
  }

  return facts;
}

function iLoveTheBeatles(n) {
  // The sentence added to the array below is required by the assignment
  // and does not necessarily reflect the opinion of the student.

  var strings = [];

  do {
    strings.push('I love the Beatles!');
  } while (++n < 15);

  return strings;
}
