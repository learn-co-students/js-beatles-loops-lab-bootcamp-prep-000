var array = []
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
var i;
var text
var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]
  var number = []
function theBeatlesPlay(musicians, instruments) {
  for (i = 0; i < musicians.length; i++) {
    text = musicians [i] + " plays " + instruments[i] 
    array.push(text)
}
 return array
}
function johnLennonFacts(facts) {
    var new_facts = []
  for (i = 0; i < facts.length; i++) {
    text = facts [i] + "!!!"
    new_facts.push(text)
  }
  return new_facts
}
function iLoveTheBeatles(number) {
  var myBeatlesArray = []
  do {
    myBeatlesArray.push( "I love the Beatles!")
   number++
  } while (number < 15)
  return myBeatlesArray
}