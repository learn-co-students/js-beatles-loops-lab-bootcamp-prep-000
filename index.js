function theBeatlesPlay(musician, instrument) {
  var arr = []
  for (var i = 0; i < musician.length; i++) {
    arr.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return arr
}

function johnLennonFacts(arr) {
  var i = 0
  while (i < arr.length) {
    arr[i] = arr[i] + "!!!"
    i++
  }
  return arr
}

function iLoveTheBeatles(num) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    num++
  } while (num < 15)
  return arr
}
