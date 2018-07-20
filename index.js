function theBeatlesPlay(musician, instrument) {
  var newArray = [];
  for(let i = 0; i < 4; i++) {
    newArray.push(musician[i] + ` plays ` + instrument[i]);
  }
  return newArray;
}


function johnLennonFacts(facts) {
  var excitedFacts = [];
  var i = 0;
  while (i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return excitedFacts;
}
johnLennonFacts(facts)()


function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}