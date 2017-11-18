function theBeatlesPlay(musicianArray, instrumentArray) {
  var newArray = [];
  for (var m = 0; m < musicianArray.length; m++) {
    newArray.push(`${musicianArray[m]} plays ${instrumentArray[m]}`);
  }
  return newArray;
}


function johnLennonFacts(arrayOfFacts) {
  var newArray = [], i = 0;
  while (i < arrayOfFacts.length) {
    newArray.push(arrayOfFacts[i] += '!!!');
    i++;
  }
  return newArray;
}


function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return array;
}
