// add solution here
function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var newArray = Array()
  for (var i = 0; i < arrayOfMusicians.length; i++) {
    newArray.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] = (facts[i] + "!!!")
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var newArray = Array()
  do {
    newArray.push("I love the Beatles!")
    number++
  } while (number < 15)
  return newArray
}