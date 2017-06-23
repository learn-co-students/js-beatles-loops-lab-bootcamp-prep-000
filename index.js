function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (let i = 0; i < musicians.length; i++) {
    plays[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return plays
}

function johnLennonFacts(facts) {
  var factsExclaimed = []
  let i = 0
  while (i < facts.length) {
    factsExclaimed[i] = facts[i] + "!!!"
    i++
  }
  return factsExclaimed
}

function iLoveTheBeatles(number) {
  var love = []
  do {
    love.push("I love the Beatles!")
  } while (++number < 15);
  return love
}
