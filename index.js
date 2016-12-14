function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var initArray = [];
  for (var i = 0; i < arrayMusicians.length; i++) {
    initArray.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  }
  return initArray;
}

function johnLennonFacts(arrayFacts) {
  var i = 0;
  while (i < arrayFacts.length) {
    arrayFacts[i] = arrayFacts[i] + "!!!";
    i++;
  }
  return arrayFacts;
}

function iLoveTheBeatles(num) {
  var initArray = [];
  var count = 0;
  do {
    initArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return initArray;
}
