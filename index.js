function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(let i = 0; i < musicians.length ; i++) {
    array = [...array, `${musicians[i]} plays ${instruments[i]}`]
  }
  return array;
}

function johnLennonFacts(facts) {
  var changedFacts = [];
  let i = 0;
  while(i < facts.length) {
    changedFacts = [...changedFacts, `${facts[i]}!!!`];
    i++;
  }
  return changedFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array = [...array, "I love the Beatles!"]
    number++
  }
  while(number < 15)
  return array;
}
