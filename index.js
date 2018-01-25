function theBeatlesPlay(musicians, instruments) {
  var desiredArray = []
   for(let i = 0; i < musicians.length; i++) {
     desiredArray.push(`${musicians[i]} plays ${instruments[i]}`)
   }
   return desiredArray
}

function johnLennonFacts(facts) {
  var enthusiasticFacts = []
  let i = 0
  while(i < facts.length) {
   enthusiasticFacts.push(`${facts[i]}!!!`)
   i++
  }
  return enthusiasticFacts
}

function iLoveTheBeatles(number) {
  var whoLovesTheBeatles = []
  do {
    whoLovesTheBeatles.push("I love the Beatles!")
    number++
  } while (number < 15)
  return whoLovesTheBeatles
}
