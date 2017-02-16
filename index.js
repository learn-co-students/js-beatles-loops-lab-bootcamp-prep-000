function theBeatlesPlay(musicians, instruments) {
  var theBeats = [];
  
    for (var i = 0; i < 4; i++) {
      theBeats.push(musicians[i] + " " + "plays "+ instruments[i])
    }
  return theBeats
}

function johnLennonFacts(array) {
  var exclamationPoints = [];
  let i=0;
  
  while (i < array.length) {
    exclamationPoints.push(array[i] + "!!!");
    i++;
  } 
  return exclamationPoints
}

function iLoveTheBeatles(n) {
  var emptyArray = [];

  do {
    emptyArray.push("I love the Beatles!")
    n++;
  } while (n < 15);
  return emptyArray
}