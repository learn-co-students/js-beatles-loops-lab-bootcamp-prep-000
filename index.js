function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (let i=0; i<musicians.length; i++) {
    band[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return band
}

function johnLennonFacts(facts) {
let i = 0
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}


function iLoveTheBeatles(number) {
  let muchLove = []
  let i = 0
  do {
    muchLove[i] = "I love the Beatles!"
    i++
  } while (i<=number && number<15)
  return muchLove
}
