function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return newArray;
}
function johnLennonFacts(facts) {
  var n = 0
  while(n < facts.length) {
    facts[n] = facts[n] + "!!!"
    n++
  }
  return facts
}
function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push('I love the Beatles!')
    n++
  }
  while(n < 15) {
    return newArray
  }
}
