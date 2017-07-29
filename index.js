function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++){
    var musicString = musicians[i] + " plays " + instruments[i]
    newArray.push(musicString)
  }
  return newArray
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
  var beatleLove = []
  do {
    beatleLove.push("I love the Beatles!")
    number++
  } while (number < 15)

  return beatleLove
}
