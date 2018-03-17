function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  while (facts.length > 0) {
    array.push(facts.shift() + '!!!')
  }
  return array;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!") 
    n++;
  } while (n < 15);
  return newArray;
}