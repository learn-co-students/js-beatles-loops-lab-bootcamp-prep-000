function theBeatlesPlay(musicians, instruments){
  const array = []

  for (var i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return array
}

function johnLennonFacts(facts) {
  var loudFacts =[]
  var i = 0

  while (i < facts.length) {
    loudFacts.push(`${facts[i]}!!!`)
    i++
  }

  return loudFacts
}

function iLoveTheBeatles(num) {
  const array = []

  do {
    array.push('I love the Beatles!')
    num++
  } while (num < 15)

  return array
}
