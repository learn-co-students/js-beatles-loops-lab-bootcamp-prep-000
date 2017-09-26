function theBeatlesPlay(musicians, instruments) {
  var lineup = []
  for (let i = 0; i <= 3; i++) {
    lineup.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return lineup
}

function johnLennonFacts(facts) {
  var newArray = []
  let i = 0
  while (newArray.length < facts.length) {
    newArray.push(facts[i] + "!!!")
    i++
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!");
    n++
  } while (n < 15);
  return newArray
}
