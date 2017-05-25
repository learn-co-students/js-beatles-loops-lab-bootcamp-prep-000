function theBeatlesPlay(musicians, instruments) {
    const array = []
      for (let i = 0, l = musicians.length; i < l; i++) {
        array.push(`${musicians[i]} plays ${instruments[i]}`)
      }
      return array
}

function johnLennonFacts(facts) {
  const excitedFacts = []

  let i = 0;
  while(i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return excitedFacts
}

function iLoveTheBeatles(n) {
  const love = []

  do{
    love.push("I love the Beatles!")
    n++
  } while ( n < 15)
  return love
}