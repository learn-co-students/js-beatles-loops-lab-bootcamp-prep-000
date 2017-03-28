function theBeatlesPlay(musicians, instruments) {
  var array1 = []
  for (var i = 0; i < musicians.length; i++) {
    array1.push(musicians[i] + " plays " + instruments[i])
  }
  return array1
}

function johnLennonFacts(array) {
  var array2 = []
  var i = 0
  while (i < array.length) {
    array2.push(array[i] + "!!!")
    i++    
  }
  return array2
}

function iLoveTheBeatles(n) {
var array3 = []
do {
  array3.push("I love the Beatles!")
  n++
}
 while (n < 15)
 return array3
}