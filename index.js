function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array) {
  var newArray = [];
  var i = 0;
  while(i < array.length) {
     newArray.push(array[i] + "!!!");
     i++;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
  } while(n < 15 && newArray.length <= n);
  return newArray;
}
