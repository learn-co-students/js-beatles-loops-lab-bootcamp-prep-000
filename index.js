// add solution here

function theBeatlesPlay(mus, ins) {
  var bt = []
  
  for (let i = 0; i < mus.length; i++) {
    bt.push(`${mus[i]} plays ${ins[i]}`)
  } return bt
}

function johnLennonFacts(facts) {
  let i = 0
while (i < facts.length) {
  facts[i] = `${facts[i]}` + "!!!"
  i++
} return facts
}

function iLoveTheBeatles(n) {
  var bt = []
  do {
    bt.push("I love the Beatles!")
    n++
  } while (n < 15)
  return bt
}