function theBeatlesPlay(musicians, instruments) {
  var musiciansPlay = []; // create an empty array stored in a variable.
  var i;
  for (i = 0; i < musicians.length; i++) {
    musiciansPlay[i] = `${musicians[i]} plays ${instruments[i]}`
  }

  return musiciansPlay;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return array;
}
