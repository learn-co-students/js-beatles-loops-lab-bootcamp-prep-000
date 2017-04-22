function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var n = 0; n < musicians.length; n++) {
    beatles.push(musicians[n] + " plays " + instruments[n]);
  }
  return beatles
}

function johnLennonFacts(facts) {
  var counter = facts.length
  while (counter > 0) {
    facts[counter-1] = facts[counter-1] + '!!!';
    counter--;
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}