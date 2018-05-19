function theBeatlesPlay(musicians, instruments) {
  var plays = new Array;
  for (var i = 0; i < musicians.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return plays;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] += "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var array = new Array;
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array;
}