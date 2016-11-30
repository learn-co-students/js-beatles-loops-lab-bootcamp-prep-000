
function theBeatlesPlay(musicians, instruments) {
  const array = []

  for(let n = 0, length = musicians.length; n < length; n++) {
    array.push(`${musicians[n]} plays ${instruments[n]}`)
  }

  return array
}

function johnLennonFacts(fact) {
  const array = []

  let f = 0
  while(f < fact.length) {
    array.push(`${fact[f]}!!!`)
    f++
  }

  return array
}

function iLoveTheBeatles(n) {
  const array = []

  do {
    array.push("I love the Beatles!")
    n++
  } while(n < 15)

  return array
}
