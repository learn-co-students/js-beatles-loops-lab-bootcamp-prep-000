function theBeatlesPlay(musicians, instruments) {
  var beatsPlay = []

  for (let i = 0; i < musicians.length ; i++) {
    beatsPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return beatsPlay

}

function johnLennonFacts(facts) {
  var loudFacts = []

  let i = 0

  while (i < facts.length) {
    loudFacts.push (`${facts[i]}!!!`)
    i++
  }
  return loudFacts
}

function iLoveTheBeatles(n) {
  var howMuch = []

  do {
    howMuch.push ("I love the Beatles!")
    n++
  } while (n < 15)

  return howMuch

}
