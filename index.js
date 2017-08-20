function theBeatlesPlay(musicians, instruments) {
  var sentences = []

  for(let i = 0; i < musicians.length; ++i) {
    sentences.push(musicians[i] + ' plays ' + instruments[i])
  }

  return sentences
}

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length) {
    facts[i] += '!!!'
    ++i
  }
  return facts
}

function iLoveTheBeatles(numLoops) {
  var array = []
  var i = 0

  do {
    array.push('I love the Beatles!')
  } while(i++ < numLoops && numLoops < 15)

  return array
}
