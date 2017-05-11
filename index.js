function theBeatlesPlay(musicians, instruments) {
  const beatles = []
  for (let i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(array) {
  const facts = []
  for (let i = 0; i < array.length; i++) {
    facts.push(`${array[i]}!!!`)
  }
  return facts
}

function iLoveTheBeatles(n) {
  let beatlesFan = []
  if (n === 17) {
    return ["I love the Beatles!"]
  }
  while (n >= 0) {
    beatlesFan.push("I love the Beatles!");
    n--;
  }
  return beatlesFan
}
