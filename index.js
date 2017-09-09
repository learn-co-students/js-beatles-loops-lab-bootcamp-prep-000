function theBeatlesPlay(musicians, instruments) {
  var musicianInstruments = []

  for (var i = 0; i < musicians.length; i++) {
    musicianInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicianInstruments
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] += "!!!"
  }
  return facts
}

function iLoveTheBeatles(number) {
  var output = new Array();
  do {
    output.push("I love the Beatles!");
    number++ 
  } while (number < 15);
  return output
}
