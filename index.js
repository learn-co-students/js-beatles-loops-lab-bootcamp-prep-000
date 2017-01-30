function theBeatlesPlay(musicians, instruments) {
  const emptyArray = []

  for (var i = 0, l = musicians.length; i < l; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts(array) {
 const shoutedFacts = []

 let i = 0
  while (i < array.length) {
    shoutedFacts.push(`${array[i]}!!!`)
    i++
  }
  return shoutedFacts
}

function iLoveTheBeatles(int) {
  const empty = []

  do {
    empty.push("I love the Beatles!")
    int++
  }  while (int < 15)

  return empty
}
