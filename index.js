function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts() {
  const exclaimfacts = []
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"]
  let i = 0
  while (i < facts.length) {
    exclaimfacts.push(`${facts[i]}!!!`)
    i++
  }
  return exclaimfacts
}

function johnLennonFacts(array) {
  const shout = []
  let i = 0
  while (i < array.length) {
    shout.push(`${array[i]}!!!`)
    i++
  }
  return shout
}


johnLennonFacts(['foo', 'bar'])

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
  } while (n++ && n < 15)
  return array
}
