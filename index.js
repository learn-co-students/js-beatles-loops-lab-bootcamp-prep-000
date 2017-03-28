function theBeatlesPlay(musicians, instruments) {
  var res = [];
  for (var i = 0; i < musicians.length; i++) {
    res.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return res
}
function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] +='!!!'
  }
  return facts
}
function iLoveTheBeatles(number) {
  var res = []
  do {
    res.push('I love the Beatles!')
    number++
  } while (number<15);
  return res
}
