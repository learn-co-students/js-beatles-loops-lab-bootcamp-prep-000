function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(words) {
  const facts = []
  
  let i = 0
  while (i < words.length) {
    facts.push(`${words[i]}!!!`)
    i++
  }
  return facts
}
function iLoveTheBeatles(n) {
  const love = []
  do {
    love.push("I love the Beatles!")
    n++
  } while (n < 15)
  return love
}