function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i<musicians.length; i++) {
array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return array;
}

function johnLennonFacts(facts) {
  var n = 0
  var array = [];
  while(n < facts.length) {
    array.push(`${facts[n]}!!!`);
    n++;
  }
  return array;
}

function iLoveTheBeatles(b) {
  var array = [];
  do {array.push("I love the Beatles!")
    b++;
  } 
  while (b > 7 && b < 15);
  return array;
}