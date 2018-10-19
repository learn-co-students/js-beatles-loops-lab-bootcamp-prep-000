// add solution here
var array = []

function theBeatlesPlay(musicians, instruments) {
  for(var i = 0; i <= musicians.length - 1 && instruments.length - 1; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var newArray = [];
  var i = 0;
  while(i < array.length) {
    newArray.push(`${array[i]}!!!`);
    i++ ;
  }
  return newArray
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    n++
  } while (n < 15 );
  return array
}