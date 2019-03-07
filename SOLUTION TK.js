// add solution here
function theBeatlesPlay(musicians, instruments){
  var musician_instrument = []
  for( var i = 0; i < musicians.length; i++ ){
    // musician_instrument[i] = musician[i] + " plays " + instrument[i]
    musician_instrument[i] = musicians[i] + " plays " + instruments[i]
  }
  return musician_instrument
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts){
  // var facts = ["He was the last Beatle to learn to drive",
  // "He was never a vegetarian",
  // "He was a choir boy and boy scout",
  // "He hated the sound of his own voice"]
  var newFacts = []
  var i = 0
  while (i<facts.length){
    // facts[i] = fact[i] + "!!!"
    newFacts[i] = facts[i] + "!!!"
    i++
  }
  return newFacts
}

function iLoveTheBeatles(number){
  var x = []
  do {
    // x[number] = "I love the Beatles!"
    x.push("I love the Beatles!")
    number++
  } while (number<15)
  return x
}
