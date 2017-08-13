function theBeatlesPlay(musicians, instruments) {
  var array1 = []
  for (let i = 0; i < musicians.length; i++) {
    array1.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array1
}

function johnLennonFacts(facts) {
  var count = 0
  while (count < facts.length) {
    facts[count] = facts[count] + "!!!"
    count++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array1 = []
  var count = n
  do {
    array1.push("I love the Beatles!")
    count++
  } while (count < 15)
  return array1
}
