function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i <= musicians.length - 1; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newArray = [];
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var newerArray = [];
  do {
    newerArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return newerArray;
}
