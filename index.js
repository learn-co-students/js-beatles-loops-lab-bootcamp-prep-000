const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var emptyArray = []
  for (var i = 0; i < 4; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
  return emptyArray
}


function johnLennonFacts(facts){
var i = 0;
var factsArray = []
while (i < facts.length) {
  factsArray.push(facts[i] + "!!!")
  i++;
}
return factsArray
}


function iLoveTheBeatles(n) {
var empArray = []
do {
  empArray.push('I love the Beatles!')
  n++
} while (n < 15)
return empArray
}
