function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (var i = 0; i < musicians.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays
}
function johnLennonFacts(facts) {
  const newArray = []

  let i = 0
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`)
    i++
  }

  return newArray
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
