// add solution here
var empty = []

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty
}


function johnLennonFacts(array) {
  let i = 0
  var newArray = []
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`)
    i += 1
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push("I love the Beatles!")
    ++number
  } while (number < 15)
  return empty
}
