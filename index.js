function theBeatlesPlay(musicians, instruments) {
  var variable = [];
  for (var i = 0; i < musicians.length; i++) {
    variable.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return variable
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  var i = -1
    do {
      if (number > 15) {
        array = "I love the Beatles!"
        return array
      }  else {
        i++
        array[i] = "I love the Beatles!"
      }
    } while (i < number)
  return array
}