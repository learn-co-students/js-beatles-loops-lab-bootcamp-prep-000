function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  var length = musicians.length
  
  for (let i = 0; i < length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(amount) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    amount++
  }
  while (amount < 15)
  
  return newArray
}