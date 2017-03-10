function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  var myArray = [];
  var i = 0;
  while (facts[i]) {
    myArray.push(facts[i] + "!!!");
    i++;
  }
  return myArray
}

function iLoveTheBeatles(n) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return myArray;
}
