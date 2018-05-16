function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  var aString
  for (var i = 0; i < musicians.length; i++) {
    aString = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(aString);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var counter = 0;
  while (counter < facts.length) {
    facts[counter] = `${facts[counter]}!!!`;
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}