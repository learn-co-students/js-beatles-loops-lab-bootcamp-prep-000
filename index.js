function theBeatlesPlay (musicians, instruments) {
  var music = []

    for (var i = 0; i < 4; i++) {
      music[i] = `${musicians[i]} plays ${instruments[i]}`
    }
  return music
}

function johnLennonFacts (facts) {
  var j = 0
  var exclame = []
  while (j < facts.length) {
    exclame[j] = `${facts[j]}!!!`
    j++
  }
  return exclame
}

function iLoveTheBeatles (n) {
  var beats = []
  var q = 0
  do {
    beats[q] = "I love the Beatles!"
    n++
    q++
  } while (n < 15)
  return beats
}
