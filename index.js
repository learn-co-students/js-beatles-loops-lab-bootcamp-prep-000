function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray[i] = musicians[i] + " plays " + instruments[i];
  };
  return newArray;
}

function johnLennonFacts(arrayOfFacts) {
  for (var i = 0; i < arrayOfFacts.length; i++) {
    arrayOfFacts[i] = arrayOfFacts[i] + "!!!";
  }
  return arrayOfFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  do {
    array[i] = "I love the Beatles!";
    i++;
    number++;
  } while (number < 15);
  return array;
}