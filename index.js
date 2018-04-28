function theBeatlesPlay(mArray, intArray) {
  var combArray = [] //create an empty array
  for (var i = 0; i < mArray.length; i++) { //declare variable i to act as index number
    combArray.push(`${mArray[i]} plays ${intArray[i]}`)
  }
  return combArray
}

function johnLennonFacts(factsArray) {
  var i = 0 //declare variable i as index number
  while (i < factsArray.length) {
    factsArray[i] += '!!!'
    i++
  }
  return factsArray
}

function iLoveTheBeatles(n) {
  var newArray = [] //create an empty array
  do {
    newArray.push('I love the Beatles!')
    n++
  } while (n < 15);
  return newArray
}