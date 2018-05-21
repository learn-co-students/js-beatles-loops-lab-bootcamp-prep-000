function theBeatlesPlay(musicians, instruments) {
  var theBand =[]
  for (var i = 0; i < musicians.length; i++) {
    theBand = [...theBand, musicians[i]+' plays '+instruments[i]]
  }
  return theBand
}

function johnLennonFacts(facts) {
  while (facts.length < 4) {
    facts = [facts[0]+'!!!', facts[1]+'!!!', facts[2]+'!!!', facts[3]+'!!!']
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.unshift('I love the Beatles!')
    n++
  } while (n < 15);
  return array
}
