function theBeatlesPlay(musicians, instruments){
  var theBeats = []
  for (let i = 0; i < 4; i++){
    theBeats.push(`${musicians[i]} plays ${instruments[i]}`)
  } return theBeats
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts){
  var newArray = []
  let i = 0
  while (i < facts.length){
    newArray.push(`${facts[i]}!!!`)
    i++
  } return newArray
}

function iLoveTheBeatles(n){
  var ar = []
  do {
    ar.unshift("I love the Beatles!")
    n++
  } while (n < 15)
  return ar
}
