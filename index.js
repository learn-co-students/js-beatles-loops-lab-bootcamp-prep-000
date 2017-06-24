function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array2 = []
  var i = 0
  while (i < facts.length) {
    array2.push(facts[i] + '!!!')
    i++
  }
  return array2
}

function iLoveTheBeatles(number) {
  var array3 = []
  var message = "I love the Beatles!"
  do {
    array3.push(message)
    number++
  } while (number < 15);
  return array3
}
