function theBeatlesPlay(musicians, instruments) {

  var array = [];

  for ( let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array) {

var newArray = [];
var i = 0;

while (i < array.length) {
    newArray.push(array[i].concat("!!!"))
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  
  var array = [];
  var i = number;

  do {
    array.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return array;
}
