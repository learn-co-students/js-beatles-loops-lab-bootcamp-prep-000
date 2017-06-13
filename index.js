  var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
  var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay (musicians, instruments) {
  var beatlesInstruments = []
  for ( var i = 0; i < 4; i++){
    beatlesInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesInstruments
}


function johnLennonFacts(facts) {

  var i = 0
  while (i < facts.length) {
    facts[i] = (facts[i] + "!!!")
    i++
  }
  return facts
}

function iLoveTheBeatles (number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
  return array
}
