// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var n = 0; n < musicians.length; n++) {
    array.push(`${musicians[n]} plays ${instruments[n]}`);
  }
  return array;
}

function johnLennonFacts(array) {
  let n = 0;
  var newArray = [];
  while (n < array.length) {
    newArray.push(`${array[n]}!!!`);
    n += 1
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
  array.push("I love the Beatles!")
  n += 1;
} while (n < 15);
  return array
}
