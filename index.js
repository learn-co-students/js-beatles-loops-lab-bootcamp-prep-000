// add solution here

function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++ ) {
    var counter = i
    array.push(musicians[counter] + " plays " + instruments[counter])
  }
  return array
}

function johnLennonFacts (array) {
  var i = 0
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles (num) {
  var array = []
  var t = 15 - num
  var i = 0
  do {
    array.push("I love the Beatles!")
    i++
  }
  while ( i < t )
  return array
}