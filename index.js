function theBeatlesPlay(musicians, instruments) {
  var newArray = new Array();
  for (var i = 0; i < musicians.length; i++) {
  newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray
}


function johnLennonFacts(facts) {
  var str = 0
  var newFacts = new Array();
  while (str < facts.length) {
    newFacts.push(facts[str] + "!!!");
  str++
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var array = new Array();
  do {
  array.push("I love the Beatles!")
  n++;
  } while (n < 15);
  return array
}
