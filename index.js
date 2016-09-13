function theBeatlesPlay (musicians, instruments) {
  var theBand = []
  for (var i = 0, l = musicians.length; i < l; i++) {
    theBand.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theBand
}
// (l = musicians.length) was used as a better way to define how long to loop rather than (i < 4).  What if the number of band members changed!

function johnLennonFacts(facts) {
  var shoutedFacts = []
  var i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return shoutedFacts
}

function iLoveTheBeatles (n) {
  const beatlesFanatic = []
  do {
    beatlesFanatic.push('I love the Beatles!')
    n++
  } while (n < 15)
  return beatlesFanatic
}
