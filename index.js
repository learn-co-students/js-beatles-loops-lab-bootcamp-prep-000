function theBeatlesPlay (musicians, instruments) {
  const array = [ ]

  for (let i = 0, l = musicians.length ; i<l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts (facts){
  const shoutedFacts = [ ]

  let n = 0
  while (n < facts.length) {
    shoutedFacts.push(`${facts[n]}!!!`)
    n++
  }
  return shoutedFacts
}

function iLoveTheBeatles (m) {
  const love = [ ]
  do {
    love.push (`I love the Beatles!`);
    m++
  } while (m < 15)

    return love
  }
