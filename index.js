function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var newArray = []
  let count = 0
  while (count < array.length) {
    newArray.push(array[count] +  '!!!')
    count++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push('I love the Beatles!')
    number += 1
  } while (number < 15)
  return array
}
