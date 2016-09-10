function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var newArray = []
  for (var index = 0; index < arrayMusicians.length; index++) {
    newArray.push(`${arrayMusicians[index]} plays ${arrayInstruments[index]}`)
  }
  return newArray
}

function johnLennonFacts(facts){
  var index = 0
  while (index < facts.length) {
    facts[index] = facts[index] + "!!!"
    index ++
  }
  return facts
}

function iLoveTheBeatles (number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number ++
  } while (number < 15)
  return array
}
