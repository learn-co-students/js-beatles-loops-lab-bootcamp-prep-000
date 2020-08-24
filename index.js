function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < `${musicians.length}`; i++) {
    var array = (`${musicians[i]}` + " plays " + `${instruments[i]}`)
    newArray.push(array)
  } return newArray
}

function johnLennonFacts(array) {
  var newArray = []
  let i = array.length
  let j = 0
  while (i != 0) {
    newArray.push(`${array[j]}` + "!!!")
    --i
    ++j
  }
  return newArray
}

function iLoveTheBeatles(n) {
  let newArray = []
  do {
    newArray.push("I love the Beatles!")
    ++n
  } while (n < 15);
  return newArray
}