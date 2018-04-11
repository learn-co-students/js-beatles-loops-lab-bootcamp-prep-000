function theBeatlesPlay(musicians, instruments) {
  var musiciansArray = [];
for (let i=0; musicians.length > i; i++) {
musiciansArray.push(`${musicians[i]} plays ${instruments[i]}`);
}
return musiciansArray;
}

function johnLennonFacts(facts) {
  var addFacts = [];
  var i = 0
  while (i < facts.length) {
     addFacts.push(facts[i] + "!!!")
     i++;
  }
  return addFacts;
}

function iLoveTheBeatles(n) {
  var string = [];
  do {string.push("I love the Beatles!"); n++;
  }
  while (n < 15);
  return string;
}