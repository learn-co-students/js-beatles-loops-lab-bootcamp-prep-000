function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length, i < instruments.length ; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}


function johnLennonFacts(array) {
  var i = 0;
  while( i < array.length) {
    array[i] += "!!!";
    i++
  }
  return array;
}


function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++
  } while(n < 15);
  return arr;
}