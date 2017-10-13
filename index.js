function theBeatlesPlay(musicians, instruments) {
  var retval = []
  for (let i in musicians) {
    retval.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return retval
}

function johnLennonFacts(facts) {
  var retval = []
  for (let fact of facts) {
    retval.push(`${fact}!!!`)
  }
  return retval
}

function iLoveTheBeatles(n) {
  var retval = []
  do {
    retval.push('I love the Beatles!')
  } while (++n < 15)
  return retval
}
