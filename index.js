function theBeatlesPlay(musicians, instruments) {
  var result = [];

  for (var i = 0; i < instruments.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return result;
}

function johnLennonFacts(array) {
var result = [];
var i = 0;
  while (i < array.length) {
      result.push(array[i] + "!!!");
      i++;
  }
  return result;
}

function iLoveTheBeatles(n) {
  var result = [];
  do {
    result.push("I love the Beatles!")
  } while (n < 15) {
    return result;
  }
}
