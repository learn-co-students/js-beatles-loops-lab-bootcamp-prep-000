function theBeatlesPlay(musicians, instruments) {
  let Beatles = []
  for (let i = 0; i < musicians.length; i++) {
    Beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return Beatles
}

function johnLennonFacts(facts){
  let excitedfacts = [], i=0, l=facts.length
  while (i<l) {
    excitedfacts.push (`${facts[i]}!!!`);
    i++
  }
  return excitedfacts
}

function iLoveTheBeatles(n) {
  let luv = []
  do {
    luv.push (`I love the Beatles!`)
    n++
  } while (n < 15)
  return luv
}
