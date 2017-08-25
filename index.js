function theBeatlesPlay(musicians, instruments) {
 var phrases = [];
 for (var i = 0; i < musicians.length; i++) {
phrases.push(musicians[i] + " plays " + instruments[i]);
}
return phrases;
}

function johnLennonFacts(array) {
  var newFacts = []
  var i = 0
  while (i < array.length) {
    newFacts.push(array[i] + "!!!")
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var toFill = [];
  do {
    toFill.push("I love the Beatles!")
    number++
  } while (number < 15);
    return toFill;
}
