function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var newFacts = facts
  var i = 0
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  if (number < 15) {
  do {
    array.push("I love the Beatles!")
  } while (array.length < (number + 1));
  return array;
}
else {
  return "I love the Beatles!";
}
}
