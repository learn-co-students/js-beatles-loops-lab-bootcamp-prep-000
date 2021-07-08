function theBeatlesPlay(musicians, instruments) {
  var artistInstrumentArray = []
  var i, artistInstrument
  for (i = 0; i < musicians.length; i++) {
    artistInstrument = musicians[i] + " plays " + instruments[i]
    artistInstrumentArray.push(artistInstrument)
  }
  return artistInstrumentArray
}


function johnLennonFacts(facts) {
  var count = 0
  var exclaimedFacts = []
  while (count < facts.length) {
    exclaimedFacts.push(facts[count] + "!!!")
    count++
  }
  return exclaimedFacts
}

function iLoveTheBeatles (x) {
  var loveStatements = []
  do {
    loveStatements.push("I love the Beatles!")
    x++;
  } while (x < 15);
  return loveStatements
}