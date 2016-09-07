function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for( var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(array) {
  var newArray = new Array();
  while (array.length !== newArray.length) {
    newArray.push(`${array[newArray.length]}!!!`)
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var array = new Array();
  do {
    array.push("I love the Beatles!")
    n++;
  } while (n < 15)
  return array;
}
