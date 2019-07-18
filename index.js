function theBeatlesPlay(musicians, instruments) {
  let play = []
  for(let i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}

function johnLennonFacts(facts) {
  let new_facts = []
  for (let i = 0; i < facts.length; i++) {
    new_facts.push(facts[i] + "!!!")
  }
  return new_facts
}

function iLoveTheBeatles(n) {
  let beatlesLove = []
  do {
    beatlesLove.push("I love the Beatles!")
    n++
  }
  while(n < 15)
  return beatlesLove
}