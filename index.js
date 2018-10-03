function theBeatlesPlay(musicians,instruments) {
  var arr = []
    for(let i = 0; i < 4; i++) {
      arr.push(`${musicians[i]} plays ${instruments[i]}`)
    }
return arr
}

function johnLennonFacts(facts) {
  var factsArray = []
  let n = 0
  while(n < facts.length) {
    factsArray.push(`${facts[n]}!!!`);
    n++
  }
return factsArray
}

function iLoveTheBeatles(n) {
  var empty = []
    do {
        empty.push(`I love the Beatles!`);
      n++
    } while (n < 15);
return empty
}
