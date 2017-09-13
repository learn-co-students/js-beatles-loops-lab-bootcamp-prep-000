function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return newArray;
}

function johnLennonFacts(array){
  var size = array.length - 1;
  while (size > - 1 ) {
    array[size] += "!!!";
    size--;
  }
  return array;
}

function iLoveTheBeatles(n){
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return emptyArray;
}
