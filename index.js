function theBeatlesPlay(musicians, instruments) {
  var emptyarr = []
  for (let i = 0; i < musicians.length ; i++) {
    emptyarr.push(`${musicians[i]} plays ${instruments[i]}`)
  } return emptyarr
}

function johnLennonFacts(facts) {
  var factstr = []
  let i = 0
  while (i < facts.length) {
    factstr.push(`${facts[i]}!!!`)
    i++
  } return factstr
}

function iLoveTheBeatles(n) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while (n < 15)
  return arr
}
