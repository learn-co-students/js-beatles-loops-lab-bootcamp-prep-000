function theBeatlesPlay(musicians, instruments) {
  var role = []
  for (let i = 0; i < musicians.length; i++) {
  role.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return role
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
  facts[i] = facts[i] + "!!!"
  i++
}
  return facts
}

function iLoveTheBeatles(number){
  var array = []
  var iLoveTheBeatles = "I love the Beatles!"
  do { array.push(iLoveTheBeatles)
  number++
} 
  while (number < 15)
  return array
}




