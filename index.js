
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(factsArray) {
  var array = []
  for (var i = 0; i < factsArray.length; i++) {
    array.push(factsArray[i] + "!!!")
  }
  return array

}


function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return array;
}









