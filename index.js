function theBeatlesPlay(musicians, instruments) {
  var mixedArray = [];
  for (var i = 0; i < musicians.length; i++) {
    mixedArray[i] = musicians[i] + ' plays ' + instruments[i];
  }
  return mixedArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var cap = facts.length;
  var newArray = facts;
  while (i < cap) {
    newArray[i] = newArray[i] + "!!!"
    i++;
  }
  return newArray;
}


function iLoveTheBeatles(n) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!")
    n++;
  } while (n < 15);
  return emptyArray
}
