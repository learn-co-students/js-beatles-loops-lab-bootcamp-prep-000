function theBeatlesPlay(musicians, instruments) {
  const empty = []
  
  for (let i = 0, l = musicians.length; i < l; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return empty
}

function johnLennonFacts(facts) {
  const scream = []
  
  let i = 0
  while (i < facts.length) {
    scream.push(`${facts[i]}!!!`)
    
    i++
  }
  return scream
}

function iLoveTheBeatles(num) {
  var arr = []
  
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  
  return arr
}







