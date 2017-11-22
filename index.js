function theBeatlesPlay(musicians, instruments) {
  let string_arr = []
  for (let i = 0; i < musicians.length; i ++) {
    string_arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return string_arr
}

function johnLennonFacts(facts) {
  let excited_facts = []
  for (let i = 0; i < facts.length; i ++) {
    excited_facts.push(facts[i] + '!!!')
  }
  return excited_facts
}

function iLoveTheBeatles(n) {
  let repeated_love = []
  do {
    repeated_love.push('I love the Beatles!')
  } while (++n < 15)
  return repeated_love
}