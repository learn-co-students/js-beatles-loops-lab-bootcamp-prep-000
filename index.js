function theBeatlesPlay(mus,instr) {
  var newArray = []
  for(let i = 0; i < mus.length; i++) {
    newArray[i] = (`${mus[i]} plays ${instr[i]}`)
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while(i < facts.length) {
    newFacts[i] = facts[i] + "!!!"
    i++
  }
  return newFacts
}

function iLoveTheBeatles(num) {
  var ar = []
  do {
    ar.unshift("I love the Beatles!")
    num++
  } while(num < 15)
  return ar
}