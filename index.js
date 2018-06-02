function theBeatlesPlay(marray, iarray) {
  var newArray = [];
  var n = marray.length;
  for (let i = 0; i < n; i++) {
    newArray[i] = marray[i] + " plays " + iarray[i];
  }
  return newArray;
}

function johnLennonFacts(array) {
  var n = array.length;
  var newArray = [];
  while (n > 0 ) {
    newArray[n-1] = array[n-1] + "!!!";
    --n;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    ++n;
  } while (n < 15);
  return array;
}