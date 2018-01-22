function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } return array
}
function johnLennonFacts(array) {
  var result = []
  var i = 0
  while (i < array.length) {
    result.push(array[i] + '!!!')
    i++
  } return result
}
function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push(`I love the Beatles!`)
    number++
  } while (number < 15)
  return newArray
}
