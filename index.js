function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  let newArray = []
  let i = 0
  while (newArray.length < array.length) {
    newArray.push(`${array[i]}!!!`)
    i++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  let array = []
  let i = number
  do {
    array.push("I love the Beatles!")
    i--
  }

  while(i < 15 && i >= 0)
  return array
}
