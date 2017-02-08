function theBeatlesPlay(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    newArray.push(array1[i] + " plays " + array2[i]);
  }
return newArray;
}

function johnLennonFacts(arrayFacts) {
  var i = 0;
  var newArray = [];
  while (i < arrayFacts.length) {
    newArray.push(arrayFacts[i] + "!!!");
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(i) {
  var arrayBeatlesLove = [];
  do {
    arrayBeatlesLove.push("I love the Beatles!");
    i--;
  } while (i < 15 && i >= 0);
  return arrayBeatlesLove;
}
