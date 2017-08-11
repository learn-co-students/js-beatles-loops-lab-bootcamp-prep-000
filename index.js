function theBeatlesPlay(musicians, instruments) {
  var theArray = [];
  for (var i = 0; i < musicians.length; i++) {
    theArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return theArray;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    number++
  } while (number < 15);
  return myArray;
}
