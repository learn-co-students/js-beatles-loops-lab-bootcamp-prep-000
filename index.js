// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

// destructive
function johnLennonFacts(array) {
  var i = 0;
  while(i < array.length) {
    array[i] = `${array[i]}!!!`
    i++
  }
  return array
}

// non-destructive
/*function johnLennonFacts(array) {
  var newArray = []
  var i = 0
  while(i < array.length) {
    newArray.push(`${array[i]}!!!`)
    i++
  }
  return newArray
}*/

function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number++
  } while (number < 15)
  return newArray
}
