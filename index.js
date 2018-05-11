function theBeatlesPlay(musicians, instruments) {
  let a = [] 
  for (let i = 0; i < musicians.length; i++) {
    a.push(musicians[i] + " plays " + instruments[i])
  }
  return a;
}

function johnLennonFacts(facts) {
  
  let newFacts = []
  
  for(let i = 0; i < facts.length; i++) {
    newFacts.push(facts[i] + '!!!')
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  let a = []
  
  do {
    a.push('I love the Beatles!')
    n++
  } while (n < 15)
  return a
}