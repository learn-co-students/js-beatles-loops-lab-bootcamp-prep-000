var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for(let i = 0; i < 4; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
    }
    return newArray
}

function johnLennonFacts(facts) {
  var thisArray = []
  var i = 0
  while(i < facts.length) {
    thisArray.push(facts[i] + "!!!")
    i++
  }
  return thisArray
}

function iLoveTheBeatles(number) {
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    number++
  } while (number < 15)
  return emptyArray
}
