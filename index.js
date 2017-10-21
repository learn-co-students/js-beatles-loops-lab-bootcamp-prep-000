const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function theBeatlesPlay(musicians1,instruments1) {

var array = []
  for (var i = 0; i < musicians1.length; i++) {
    array.push( musicians1[i] +" plays "+ instruments1[i])
  }
  return array
}

function johnLennonFacts(array) {

var i = 0
  while (i < array.length) {

    array[i] = array[i] + "!!!"

    i++
  }
return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while ( n < 15);
  return array
}
