function theBeatlesPlay(musicians, instruments) {
    const arr = [];

    for (let i = 0, m = musicians.length; i < m; i++) {
         arr.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return arr
  }

function johnLennonFacts(facts) {
  const lennonFacts = [];
  let i = 0;

  while (i < facts.length) {
    lennonFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return lennonFacts
}

function iLoveTheBeatles(n) {
  var arr = [];

  do {
    arr.push(`I love the Beatles!`)
    n++
  } while
    (n < 15)

      return arr
}
