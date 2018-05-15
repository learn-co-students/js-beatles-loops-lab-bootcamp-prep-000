function theBeatlesPlay(arraym, arrayi){
  var arrays=[]
    for (let i = 0; i <arraym.length; i++ ) {
  arrays.push(`${arraym[i]} plays ${arrayi[i]}`)
}
return arrays

}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}