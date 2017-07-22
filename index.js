const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments){
  var array = []
  var i = 0
  for (i = 0; i < 4; i++) {
    var stringBeatles = musicians[i] + " plays " + instruments[i]
    array.push(stringBeatles)
  }
return array;
}

const facts = ["He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"]

function johnLennonFacts(facts){
var arrayFacts = []
var i = 0
  while (i < facts.length) {
    var exclamation = facts[i] + "!!!"
    arrayFacts.push(exclamation)
    i++
  }
  return arrayFacts
}

function iLoveTheBeatles(number){
  var numberArray = []
    do {
      numberArray.push("I love the Beatles!")
      number++
    } while (number < 15)
    return numberArray
}
