function theBeatlesPlay(musicians, instruments) {
  var theyPlay = []
  for(var i = 0; i < musicians.length; i++) {
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theyPlay
}
function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++;
  }
  return facts
}
function iLoveTheBeatles(num) {
  var howMuch = []
  do {
    howMuch.push("I love the Beatles!")
    num++
  } while (num < 15)
  return howMuch
}