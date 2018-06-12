function theBeatlesPlay(musician, instruments) {
  var array = []
  for (let i = 0, l = musician.length; l>i; i++ ) {
    array.push(`${musician[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var factsNew = []
  let i = 0 
  while (i < facts.length) {
    factsNew.push(`${facts[i]}!!!`)
    i++
  }
  return factsNew
}

function iLoveTheBeatles(n) {
  const array = []
  do { array.push("I love the Beatles!")
  n++  
  } while (n<15)
  
  return array
}