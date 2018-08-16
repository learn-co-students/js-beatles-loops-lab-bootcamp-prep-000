// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray) {
  let newArray = []
  for (var i = 0; i < musiciansArray.length; i++) {
      newArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`) 
  }
  return newArray
}

function johnLennonFacts(factsArray) {
  let newArray = []
  let i = 0 
  while (i < factsArray.length) {
    newArray.push(`${factsArray[i]}!!!`)
    i++ 
  }
  return newArray
}

function iLoveTheBeatles(num) {
  let newArray = []

  do {
    num += 1
    newArray.push("I love the Beatles!");
    
  } while (num < 15);
  return newArray
}