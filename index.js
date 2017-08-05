function theBeatlesPlay(musicians, instruments) {
  const arr1 = [];
  for (var i = 0; i < musicians.length; i++){
    arr1.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr1;
}

function johnLennonFacts(facts) {
  const shoutedFacts = []
  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutedFacts
}

function iLoveTheBeatles(n){
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15);

  return arr
}