function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const shoutout = []

  let i = 0
  while (i < facts.length) {
    shoutout.push (`${facts[i]}!!!`)
    i++
  }
  return shoutout
}

function iLoveTheBeatles(n) {
  const showLove = []
  do {
    showLove.push("I love the Beatles!")
    n++
  } while (n < 15)

  return showLove
}
