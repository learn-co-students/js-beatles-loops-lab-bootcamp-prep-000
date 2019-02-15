// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i = 0; i<musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i]
    array.push(string)
  }
  return array
}

function johnLennonFacts(factsArray) {
  var counter = 0;
  while(counter < factsArray.length) {
    factsArray[counter] = factsArray[counter] + "!!!";
    counter++;
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number ++;

  }
  while (number < 15) {
  }
  return array;
}