function theBeatlesPlay(array1, array2) {
  var newArray = [];
  for (var i=0; i<array1.length; i++) {
    newArray.push(`${array1[i]} plays ${array2[i]}`);
  }
  return newArray;
}

function johnLennonFacts(array) {
  var i = 0;
  var newArray = [];
  while (i < array.length) {
    newArray.push(array[i] + "!!!");
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return newArray;
}
