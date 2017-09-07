function theBeatlesPlay(musicians,instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(facts) {
  let countdown = facts.length - 1
  while (countdown >= 0) {
    facts[countdown] = facts[countdown] + "!!!"
    --countdown
  }
  return facts
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    ++n
  } while (n < 15);
  return newArray
}
