function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (var i = 0; i < 4; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i])
  }
 return myArray
}

function johnLennonFacts(array) {
  var i = 0
  while(i < array.length) {
    array[i] += "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15);
  return array
}
