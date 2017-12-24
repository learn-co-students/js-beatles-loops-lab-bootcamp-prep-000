
function theBeatlesPlay(musicians, instrument) {
  var arrayPlays = []
  for (let i = musicians.length; i > 0; i--) {
    arrayPlays.unshift(`${musicians.pop()} plays ${instrument.pop()}`)
  }
  return arrayPlays
}

function johnLennonFacts(array) {
  var arrayExclamation = []
  var i = 0
  while (i < array.length) {
    arrayExclamation.push(array[i] + "!!!")
    i++
  }
  return arrayExclamation
}

function iLoveTheBeatles(num) {
  var arrNew = []
  do {
    arrNew.push("I love the Beatles!")
    num++
  } while (num < 15)
  return arrNew
}

