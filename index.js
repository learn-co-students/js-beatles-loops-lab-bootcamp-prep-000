function theBeatlesPlay(musicians, instruments) {
  var arrayJoin = [];
  for (var i = 0; i < musicians.length; i++) {
    var stringCreated = musicians[i] + " plays " +instruments[i]
    arrayJoin.push(stringCreated)
  }
  return arrayJoin
}

function johnLennonFacts(facts) {
  var i = 0;
  while(facts.length > i) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!")
    n++
  } while (n < 15)
  return emptyArray
}
