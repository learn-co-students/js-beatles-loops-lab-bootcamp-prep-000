function theBeatlesPlay(musicians, instruments){
  const newArray = []
  for (let i= 0; i < musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return newArray;
}
function johnLennonFacts(facts){
  const cryFacts = [];
  let i = 0;
  while (i < facts.length){
    cryFacts.push(`${facts[i]}!!!`)
    i++
  }
  return cryFacts
}
function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
