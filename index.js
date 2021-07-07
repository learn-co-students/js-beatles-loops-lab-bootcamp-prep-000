// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty = [] ;
  for (var i = 0; i < musicians.length; i++) {
    empty.push (`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts(array) {
  var i = 0;
  while(i < array.length) {
    array[i] = array[i]+"!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var empty = [];
  var i = number;
  do {
    empty.push("I love the Beatles!");
    i = i + 1;
  }
  while (i < 15 );
  return empty;
}

