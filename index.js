function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (let n = 0; n < musicians.length;n++) {
    plays.push(musicians[n] + " plays " + instruments[n])
  }
  return plays
}

function johnLennonFacts(array) {
  var n = 0
  while (n < array.length) {
    array[n] = array[n] + "!!!"
    n++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  if (n > 15) {
    array.push("I love the Beatles!")
  } else {
    do {
      array.push("I love the Beatles!")
      n--
    } while (n > -1)
  }
  return array
}
