function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return newArray
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!'
    i++
  }
  return array
}

function iLoveTheBeatles(num){
  var ary = []
  var i = 0
  do {
    ary[i] = "I love the Beatles!"
    i++
  } while ((i <= num) && (num <= 15))
  return ary
}
