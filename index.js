function theBeatlesPlay (musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
      beatles.push(musicians[i] + " plays " + instruments[i])
  } return beatles
}

function johnLennonFacts (johnFacts) {
  var newFacts = [];
  var i = 0;
  while (i < johnFacts.length) {
    newFacts.push(johnFacts[i] + "!!!");
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(number){
  var beatlesArray = [];
  do {
    beatlesArray.push("I love the Beatles!");
    number++
  } while (number < 15);
  return beatlesArray
}
