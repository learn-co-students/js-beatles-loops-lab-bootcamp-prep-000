function theBeatlesPlay (musicians, instruments) {
  var array = []
  for(var i = 0; i < musicians.length; i++) {
    array = [...array, musicians[i] + " plays " + instruments[i]]
  }
  return array
}

function johnLennonFacts (array) {
  var number = 0
  while (number < array.length) {
    array[number] = array[number] + "!!!"
    number++
  }
  return array
}

function iLoveTheBeatles (number) {
  var array = []
  do {
    array = [...array, "I love the Beatles!"]
    number++
  } while (number < 15)
  return array
}
