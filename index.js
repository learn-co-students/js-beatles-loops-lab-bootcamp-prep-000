//The Beatles Play

function theBeatlesPlay(musicianArray, instrumentArray) {
  var playsArray = []
  for (var i = 0; i < musicianArray.length; i++) {
  playsArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`
  }
  return playsArray
}


//John Lennon Facts
function johnLennonFacts(factsArray) {
  var excitedFactsArray = []
  for (var i = 0; i < factsArray.length; i++) {
    excitedFactsArray[i] = `${factsArray[i]}!!!`
  }
  return excitedFactsArray
}


//I Love The Beatles
function iLoveTheBeatles(n) {
  var loveBeatlesArray = [];
  var i = 0;
  do {
  loveBeatlesArray[i] = "I love the Beatles!"
  n = n + 1
  i = i + 1
} while (n < 15);
  
return loveBeatlesArray  
}