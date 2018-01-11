function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for(let i = 0; i < musicians.length; i++) {
    let string = `${musicians[i]} plays ${instruments[i]}`
    arr.push(string)
  }
  return arr
}

function johnLennonFacts(facts) {
  var factsExcl = []
  for(let i = 0; i < facts.length; i++) {
    var fact = facts[i] + '!!!'
    factsExcl.push(fact)
  }
  return factsExcl
}


function iLoveTheBeatles(num) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    num++
  } while (num < 15)
  return arr
}