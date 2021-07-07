var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
  newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}



function johnLennonFacts(facts) {
  const newArray = []

  let i = 0
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`)
    i++
  }

  return newArray
}

function iLoveTheBeatles(number) {
  var emptyArray = []
  
  do {
  emptyArray.push("I love the Beatles!");
  number++
  } while (number < 15);
  return emptyArray
}