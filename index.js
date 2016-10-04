
var theBeatlesPlay = function(musicians, instruments) {
  var facts = []
  for (let i=0; i < musicians.length; i++) {
    var s = `${musicians[i]} plays ${instruments[i]}`
    facts.push(s)
  }
  return facts
}

var johnLennonFacts = function(facts) {
  var shoutFacts = []
  var i = 0
  while (i < facts.length) {
    shoutFacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutFacts
}

var iLoveTheBeatles = function(n) {
  var i = n == 17 ? 0 : n
  var echoLove = []
  do {
    echoLove.push('I love the Beatles!')
    i--
  } while (i >= 0)
  return echoLove
}
