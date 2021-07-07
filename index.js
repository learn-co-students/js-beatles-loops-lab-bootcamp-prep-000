const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(m, i) {
  var a = []
  for(var counter = 0; counter < m.length; ) {
    var mPlaysI = m[counter] + " plays " + i[counter]
    a.push(mPlaysI)
    counter++
  }
    return a
}



const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  var b = []
  for(var counter = 0; counter < array.length;) {
    var addExclamation = array[counter] + "!!!"
    b.push(addExclamation)
    counter++
  }
  return b
}


function iLoveTheBeatles(num) {
  var c = []
  do {
    c.push("I love the Beatles!")
    num++
  } while(num < 15)
  return c
}
