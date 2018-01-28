function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`) 
  }
  return array
}

function johnLennonFacts(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + '!!!'
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    number = ++number
    array.push('I love the Beatles!')
  } while (number < 15)
  return array
}

