function theBeatlesPlay(musician, instrument) {
  var array = [];
  for (var i=0; i<musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(facts.length>i) {
    facts[i] = `${facts[i]}!!!`;
    ++i;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push(`I love the Beatles!`);
    ++number;
  } while (number<15);
  return array;
}