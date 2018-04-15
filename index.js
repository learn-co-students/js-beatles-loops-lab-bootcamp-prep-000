function theBeatlesPlay(marray, iarray) {
  var newArray = [];
  for ( let x = 0; x < marray.length; x++) {
    newArray.push(`${marray[x]} plays ${iarray[x]}`);
  }
  return newArray;
}

function johnLennonFacts(array) {
  let x = 0;
  while (x < array.length) {
    array[x] = array[x] + '!!!';
    x++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return newArray;
}