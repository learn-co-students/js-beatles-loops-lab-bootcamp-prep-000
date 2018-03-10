function theBeatlesPlay (arrMuscians, arrInstruments) {
  var newArray = [];
  for (var i = 0; i < arrMuscians.length; i++){
    newArray.push(arrMuscians[i] + " plays " + arrInstruments[i]);
  }
  return newArray;
}

function johnLennonFacts(arrFacts) {
  var i = 0;
  while (i < arrFacts.length) {
    arrFacts[i] = arrFacts[i] + "!!!";
    i++;
  }
  return arrFacts;
}

function iLoveTheBeatles (num) {
  var newArray2 = [];
  do {
    newArray2.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return newArray2;
}
