// add solution here

function theBeatlesPlay(musicians, instruments) {
    //var array ()
    const array = []

    for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  //can't i => 0

  return array
}


  function johnLennonFacts(facts) {
      const fFacts = []

  let i = 0
  while (i < facts.length) {
    fFacts.push(`${facts[i]}!!!`)
    i++
  }
  return fFacts
}

function iLoveTheBeatles(n) {
  const array = []
  do {
    array.push('I love the Beatles!')
    n++
  }
  while (n < 15)
  return array
}
