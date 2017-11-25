function theBeatlesPlay(musicians, instruments) {
var newArray = [];

for (let i = 0; i < musicians.length; i++) {
  newArray.push(musicians[i] + " plays " + instruments[i])
}

return newArray
}


function johnLennonFacts(facts){
var newFacts = []
var i = 0
  while (facts.length > i) {
    newFacts.push(facts[i] + "!!!")
    i++
  }
  return newFacts
}

function iLoveTheBeatles(number) {
  var newNumber = [];
  do {
    newNumber.push("I love the Beatles!");
    number++
  } while (number < 15)

return newNumber
}
