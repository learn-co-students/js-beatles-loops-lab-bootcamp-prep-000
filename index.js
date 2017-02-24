function theBeatlesPlay(musician, instrument) {
  var array = [];
  for(var i = 0; i < musician.length; i += 1) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var excitedFacts = [];
  var i = 0;
  while(i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return excitedFacts
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push('I love the Beatles!')
    number++;
  } while(number < 15) {
  }
    return array;
}
