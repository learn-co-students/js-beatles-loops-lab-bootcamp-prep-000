// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
var array = [];
  for (var i = 0; i < musicians.length ; i++) {
    if (i <= musicians.length) {
      array.push (musicians[i] + ` plays ` + instruments[i]);
    }
  }
  return array;  
}

var facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"]
function johnLennonFacts(facts) {
  var arr = []
  var n = 0
  while (n < facts.length) {
    arr.push(facts[n] + `!!!`)
    n++;
    }
    return arr
  }
  
function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push(`I love the Beatles!`)
    number++
  }
  while (
    (number < 15)
  )
  return array
}