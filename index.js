function theBeatlesPlay(musicians, instruments) {
  const beatlesArray = [];
  for ( let i = 0, ml = musicians.length; i < ml; i++ ) {
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
    return beatlesArray
}

function johnLennonFacts(johnArray) {
  const exclaimed = []
  let i = 0
  while ( i < johnArray.length) {
    exclaimed.push(`${johnArray[i]}!!!`)
    i++
  }
  return exclaimed
}

function iLoveTheBeatles(n) {
  const luv = []
  do {
    luv.push("I love the Beatles!")
    n++
  } while (n < 15)
  return luv
}