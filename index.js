function theBeatlesPlay(musicians, instruments) {
  const array = []
    for (let i = 0, c = musicians.length; i < c; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
    }

  return array
}

function johnLennonFacts(facts) {
  const shoutedFacts = [];

    let i = 0
      while (i < facts.length) {
        shoutedFacts.push(`${facts[i]}!!!`)
        i++
   }

   return shoutedFacts
 }

 function iLoveTheBeatles(n) {
  const array = []

  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)

  return array
}
