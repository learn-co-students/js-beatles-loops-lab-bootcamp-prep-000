function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var musiciansAndInstruments = []
  for(let i = 0; i < arrayOfMusicians.length; i++) {
    musiciansAndInstruments[i] = `${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`
  }
  return musiciansAndInstruments
}
function johnLennonFacts(facts) {
  var factsWithExclamations = []
    var i  = 0
      while(i < facts.length) {
      factsWithExclamations[i] = facts[i] + "!!!"
      i++
    }
    return factsWithExclamations
}
function iLoveTheBeatles(number) {
  var array = []
    do {
     array = [...array, "I love the Beatles!"]
      number++
      } while (number < 15)
  return array
}