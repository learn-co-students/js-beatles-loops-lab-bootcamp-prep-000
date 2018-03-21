function theBeatlesPlay (musicians, instruments){
  var sentence = []
  for (var i = 0; i < musicians.length; i++){
    sentence.push(musicians[i] + ' plays ' + instruments[i])
  }
  return sentence
}

function johnLennonFacts (array) {
  var n = 0
  while (n < array.length) {
    array[n] = array[n] + '!!!'
    n++
  }
  return array
}

function iLoveTheBeatles(n){
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}
