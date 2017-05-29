function theBeatlesPlay(musicians, instruments) {
  var emptyArray = new Array();
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}


function johnLennonFacts(arrayOfFacts) {
var counter = 0
  while (counter < arrayOfFacts.length) {
    arrayOfFacts[counter] = arrayOfFacts[counter] + '!!!'
    counter++;
  }
  return arrayOfFacts;
}

function iLoveTheBeatles(number) {
  var array = new Array();
  do {
    array.push("I love the Beatles!");
    number++;
  }
  while (number < 15)
  return array;
}
