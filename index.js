// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var emptyArray = []
function theBeatlesPlay(musicians, instruments) {
  for (var counter = 0; counter < musicians.length; counter++) {
    emptyArray.push(`${musicians[counter]} plays ${instruments[counter]}`)
  }  
   return emptyArray
}

function johnLennonFacts(facts) {  
  var counter = 0
  var factOfJohn =[]
  while (counter < facts.length) {
    factOfJohn.push(`${facts[counter]}!!!`)
    counter++
  }
  return factOfJohn
}

function iLoveTheBeatles(number) {
  var array = []
  
  do {
    array.push('I love the Beatles!')
    number++
  }
    while (number < 15);
  return array
}

