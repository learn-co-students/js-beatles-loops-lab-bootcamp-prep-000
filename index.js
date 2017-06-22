function theBeatlesPlay (musicians, instruments) {
  var newArray = []
  for (var i=0; i < musicians.length; i++) {
    newArray[i] = musicians[i] + " plays " + instruments[i]
  }
  return newArray
}

function johnLennonFacts (array) {
  var blah = 0
  while (blah < array.length) {
    array[blah] = array[blah] + "!!!"
    blah++
  }
  return array
}

function iLoveTheBeatles (num) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    num++
  }
  while (num < 15);
  return newArray
}
