function theBeatlesPlay(musicians, instruments){
  var a = []
  for (let i=0;i<musicians.length;i++) {
    a[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return a
}

function johnLennonFacts(facts) {
  var a = 0, b = []
  while (a < facts.length){
    b[a] = `${facts[a]}!!!`
    a++
  }
  return b
}

function iLoveTheBeatles(number){
  var a = [], b = number, i = 0
  do {a[i] = `I love the Beatles!`
    b++, i++
  }while (b < 15)
  return a
}