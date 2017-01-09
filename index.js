function theBeatlesPlay(musicians, instruments) {

  var musiciansAndInstruments = []

  for (let i = 0; i < musicians.length; i++ ) {
    musiciansAndInstruments.push(`${musicians[i]}` + " plays " + `${instruments[i]}`)
  }
  return musiciansAndInstruments
}

function johnLennonFacts(facts) {
  var shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}` + "!!!")
    i++
  }
  return shoutedFacts
}


function iLoveTheBeatles(n) {

  var loveForTheBeatles = []

  do {
    loveForTheBeatles.push("I love the Beatles!")
    n++
  } while (n < 15)

  return loveForTheBeatles
}
