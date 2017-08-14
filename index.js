function theBeatlesPlay (musicians, instruments) {
  var a = [];
  for (var i = 0; i < musicians.length; i++) {
    a.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return a;
}

function johnLennonFacts (lennon_facts) {
  var i = 0;
  while (i < lennon_facts.length) {
    lennon_facts[i] = lennon_facts[i] + "!!!";
    i += 1;
  }
  return lennon_facts;
}

function iLoveTheBeatles (num) {
  var a = [];
  do {
    a.push("I love the Beatles!");
    num += 1;
  } while(num < 15);
  return a;
}
