function theBeatlesPlay(musicians, instruments) {
  const array = []
  var l = musicians.length
  for (let i=0; i<l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var arr = []
  let i=0
  while(facts.length>i) {
    arr.push(facts[i]+'!!!')
    i++
  }
  return arr
}

function iLoveTheBeatles(n) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while (n<15)
  return arr
}
