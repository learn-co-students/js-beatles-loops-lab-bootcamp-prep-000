function theBeatlesPlay(musicians, instruments){
  var foo = []
  for (let i = 0; i < musicians.length; i++){
    foo.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return foo
}

function johnLennonFacts(facts) {
  var foo = []
  for (let i = 0; i < facts.length; i++){
    foo.push(facts[i] + '!!!')
  }
  return foo
}

function iLoveTheBeatles(n){
  var foo = []
  do {
    foo.push("I love the Beatles!")
    n++
  } while (n < 15)
  return foo
}
