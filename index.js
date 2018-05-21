function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var musiciansInstruments = []
  var i;
  for (i = 0; i < arrayMusicians.length; i++) {
    musiciansInstruments.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
  }
  return musiciansInstruments
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = `${facts[i]}` + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  }
  while (number < 15)
  return array
}