function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var counter = facts.length-1;
  while(counter >= 0) {
    facts[counter] = `${facts[counter]}!!!`;
    --counter;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return array;
}