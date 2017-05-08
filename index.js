function theBeatlesPlay(m,instr) {
  var a = []
  for(let i = 0; i < m.length;i++) {
    a.push(m[i] + " plays " + instr[i])
  }
  return a
}

function johnLennonFacts(facts) {
  var i = 0
  var arr = []
  while(i < facts.length) {
    arr.push(facts[i++] + '!!!')
  }
  return arr
}

function iLoveTheBeatles(p) {
  var arr = []
  var s = 'I love the Beatles!'
  do {
    arr.push(s)
  } while(++p < 15)
  return arr
}
