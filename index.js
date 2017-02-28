function theBeatlesPlay(arraym,arrayi) {
  var array = []
  for (let i = 0; i < arraym.length; i++) {
    array.push(`${arraym[i]} plays ${arrayi[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var shoutedfacts = []
  let i = 0
  while (i < facts.length) {
    shoutedfacts.push(`${facts[i]}!!!`)
    i++
    }
    return shoutedfacts
}

function iLoveTheBeatles(n) {
  var array = []
  do {(array.push("I love the Beatles!"));
  n++
}
  while (n < 15)
  return array
}