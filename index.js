function theBeatlesPlay(musicians, instruments) {
  var array =[]
  for (let i=0; i<musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(factsArray) {
  let insideArray = [];
  let i = 0
  while (i < factsArray.length) {
    insideArray.push(`${factsArray[i]}!!!`)
    i++
  }
  return insideArray
}

function iLoveTheBeatles(n) {
  var insideArray = [];
  do {
    insideArray.push("I love the Beatles!")
    n++
  }
  while (n < 15) 
  return insideArray
}
