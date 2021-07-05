// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var string = "plays the"
  for (let i = 0; i < musicians.length; i++) {
  array.push((musicians[i]) + " plays " + (instruments[i]))
  }
  return array;
}

function johnLennonFacts(facts) {
var i = 0;
var newFacts = [];
while (i < facts.length){
  newFacts.push(facts[i] + "!!!");
  i++;
}
return newFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}