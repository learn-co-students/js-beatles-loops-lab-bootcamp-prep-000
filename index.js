function theBeatlesPlay(musicians,instruments) {
  var instrumentals = []
  for (var i = 0; i < musicians.length; i++) {
    instrumentals.push(musicians[i] + " plays " + instruments[i])
  }
  return instrumentals
}
function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}
function iLoveTheBeatles(n) {
  var loveForTheBeatles = []
  do {
  loveForTheBeatles.push("I love the Beatles!")
  n ++
} while (n < 15)
return loveForTheBeatles
}
