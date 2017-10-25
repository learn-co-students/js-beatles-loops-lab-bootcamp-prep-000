function theBeatlesPlay(musicians, instruments) {
  const array = []
   for (let i = 0, l = musicians.length; i < l; i++)  {
    array.push(`${musicians[i]} plays ${instruments[i]}`)

  }
  return array
}

function johnLennonFacts(facts) {
  const jfacts = []
  let i=0
  while(i < facts.length) {
    jfacts.push(`${facts[i]}!!!`)
    i++
  }
  return jfacts
}

function iLoveTheBeatles(n){
  const beatles = []
  do {
    beatles.push('I love the Beatles!')
    n++
  } while (n < 15)
    return beatles
}
