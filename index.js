function theBeatlesPlay(musicians, instruments) {
  var newArray = [];

  for(let i = 0; i < musicians.length && instruments.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts) {

  var factsArray = [];
  var i = 0
  while (i < facts.length) {
    factsArray.push(`${facts[i]}!!!`);
    i++;
  }

  return factsArray;
}


function iLoveTheBeatles(n) {
  var array = [];

  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15)
  return array;
}
