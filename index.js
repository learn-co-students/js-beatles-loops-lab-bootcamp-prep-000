function theBeatlesPlay(m, i){
  var ar = []
  for (let count = 0; count < 4; count++){
    ar.push(m[count] + " plays " + i[count])
  }
  return ar
}

function johnLennonFacts(facts){
  var ar = []
  let count = 0
  while (count < facts.length){
    ar.push(facts[count++] + "!!!");
  }
  return ar
}

function iLoveTheBeatles(num){
  var ar = []
  do {
    ar.push("I love the Beatles!")
    num++
  } while (num <15)
  return ar
}
