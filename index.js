function theBeatlesPlay(eachmusician, instruments) {
  var array = [];
  for (var i = 0; i < eachmusician.length; i++) {
    array.push(`${eachmusician[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var i=0;
  while(i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push(`I love the Beatles!`);
    n++;
  } while (n<15);
  return array;
} 

