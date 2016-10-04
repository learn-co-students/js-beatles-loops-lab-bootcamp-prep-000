function theBeatlesPlay(musicians, instruments) {
var newArray = []
  for ( var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(array) {
var newerArray = []
var index = 0
  while (array.length > newerArray.length) {
    newerArray.push(array[index++] + "!!!")
  } return newerArray;
}

function iLoveTheBeatles(n) {
  var oldArray = []
  do {
    oldArray.push("I love the Beatles!");
  } while (n < 15 && n >= oldArray.length)
  return oldArray;
}
