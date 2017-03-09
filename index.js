function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = []
  for (let i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i])
  }
  return whoPlaysWhat
}

function johnLennonFacts(array) {
  var newArray = []
  var i = 0
  while (i < array.length) {
    newArray.push(array[i++] + "!!!")
  }
  return newArray}

function iLoveTheBeatles(n) {
  var arrayOfLove = []
  do {
    arrayOfLove.push("I love the Beatles!")
    n++
  } while (n < 15)
  return arrayOfLove
}