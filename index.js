// add solution here
function theBeatlesPlay(musicians, instruments) {
  let resultArray = []

  for (var i = 0; i < musicians.length; i++) {
    resultArray.push(musicians[i] + " plays " + instruments[i])
  }

  return resultArray
}


function johnLennonFacts(factsArray) {
  let resultArray = []
  let i = 0
  while (i < factsArray.length) {
    resultArray.push(factsArray[i] + "!!!")
    i++
  }
  return resultArray
}


function iLoveTheBeatles(n) {
    let resultArray = []

    do {
      resultArray.push("I love the Beatles!")
      n++
    } while (n < 15);

    return resultArray
}
