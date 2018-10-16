function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array) {
  var i = 0;
  var johnLennon = [];
  while(i < array.length) {
    johnLennon.push(`${array[i]}!!!`);
    i++;
  }
  return johnLennon;
}

function iLoveTheBeatles(i) {
  var theBeatlesAreCool = [];
  do {
    theBeatlesAreCool.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return theBeatlesAreCool;
}