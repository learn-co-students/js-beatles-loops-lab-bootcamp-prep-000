function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for(var i = 0, l = musicians.length; i < l; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts) {
  var arr = []
  var i = 0
  while(i < facts.length) {
    arr.push(`${facts[i]}!!!`)
    i++
  }
  return arr
}

function iLoveTheBeatles(n) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while
  (n < 15)
  return arr
}