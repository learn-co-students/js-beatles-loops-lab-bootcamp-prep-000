
function theBeatlesPlay(musicians, instruments) {
  var finalArray = [];

  for ( var i = 0; i < musicians.length; i++ ) {
    finalArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return finalArray;
}

function johnLennonFacts(facts) {

  var i = 0
  var finalArray = [];

  while (i < facts.length) {
    finalArray[i] = facts[i] + "!!!";
    i++;
  }
  return finalArray;
}

function iLoveTheBeatles(n) {

  var array = [];

  do {
    array.push("I love the Beatles!");
    n++;
  } while ( n < 15);

  return array;
}
