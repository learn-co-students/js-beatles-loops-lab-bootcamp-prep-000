function theBeatlesPlay (musicians, instruments) {
  var array = []
    for (var i=0;i<musicians.length;i++) {
      array.push(musicians[i]+ ' plays '+ instruments[i])
    }
  return array
}

function iLoveTheBeatles (n) {
  var array = []
  if (n<15) {
  do {
    array.push('I love the Beatles!')

  } while (n>0, n--)
} else {
  array.push('I love the Beatles!')
}
  return array
}

function johnLennonFacts (array) {
  var newArray = []
  for (var i in array) {
    newArray.push(array[i] + "!!!")
  }
  return newArray
}
