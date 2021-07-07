function theBeatlesPlay(musicians, instruments) {
 var array = []
 for (let i = 0, g = musicians.length; i < g; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
 }
return array
  
}

function johnLennonFacts(facts) {
  var factoids = []
  let i = 0
while (i < facts.length) {
  factoids.push(`${facts[i]}!!!`)
  i++
}
  return factoids
}

function iLoveTheBeatles(number) {
  var newstuff = []
  
  do {newstuff.push("I love the Beatles!")
    number++
  }
  while (number < 15)
  return newstuff}
  
  
  
  

