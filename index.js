function theBeatlesPlay(musicians, instruments) {
  var muAndInst = []
  for (var i = 0; i < musicians.length; i++) {
    muAndInst.push(musicians[i] + ' plays ' + instruments[i])
  }
  return muAndInst
}
function johnLennonFacts(facts) {
  var jFacts = []
  for(var i=0; i<facts.length; i++){
    jFacts.push(facts[i] + '!!!')
  }
  return jFacts
}
function iLoveTheBeatles(n) {
  var beatle = []
  do {
    beatle.push('I love the Beatles!')
    n++
  }while (n<15)
  return beatle
}
