function theBeatlesPlay(musicians, instruments){
  var newArr = []
  for (let i = 0; i< musicians.length; i++) {
    newArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArr
}

function johnLennonFacts(facts){
  let i = 0;
  var newFacts = []
  while(i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var emptyArr = []
  do {
    emptyArr.push("I love the Beatles!");
    n++;
  }
  while (n < 15); 
  return emptyArr
}