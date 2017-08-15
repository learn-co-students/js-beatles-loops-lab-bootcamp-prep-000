function theBeatlesPlay(musicians, instruments) {
  var members = new Array()
  for (var i = 0; i < musicians.length; i++) {
    var entry = musicians[i] + " plays " + instruments[i]
    members.push(entry)
  }
  return members
}

function johnLennonFacts(facts) {
  var counter = 0
  while (counter < facts.length) {
    facts[counter] = facts[counter] + "!!!"
    counter += 1
  }
  return facts
}

function iLoveTheBeatles(number) {
  var results = new Array()
  if (number < 15) {
    do {
      results.push("I love the Beatles!")
    } while (results.length < number + 1)
  } else {
    results.push("I love the Beatles!")
  }
  return results
}
