function theBeatlesPlay(musicians, instruments) {
  const array = [];

  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return array;
}
function johnLennonFacts(facts) {
  var i = 0;
  var newArray = [];
  while (i < facts.length) {
    var string = facts[i] + "!!!";
    newArray.push(string);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles (n) {
  var newArray = [];
  do {
    var string = "I love the Beatles!";
    newArray.push(string);
    n++;
  } while (n < 15);
  return newArray;
}
