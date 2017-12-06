function theBeatlesPlay(musicianArray, instrumentArray) {
  var newArray = [];
  for (var i = 0; i < musicianArray.length; i++) {
    newArray.push(musicianArray[i] + " plays " + instrumentArray[i]);
  }
  return newArray;
}

function johnLennonFacts(array) {
  let n = 0;
  while (n<array.length) {
    array[n] = array[n] + "!!!";
    n++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return newArray;
}
