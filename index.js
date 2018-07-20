// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatles = []
  for (let i = 0; i < musicians.length; i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

var facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
    ]
    
function johnLennonFacts(facts){
  var excitingFacts = []
  var i = 0
  while (facts.length > i){
    excitingFacts.push(`${facts[i]}!!!`)
    console.log(i++)
  }
  return excitingFacts
}

function iLoveTheBeatles(n){
  var bigFan = []
  do{
    bigFan.push("I love the Beatles!")
    console.log(n++)
  } while (n < 15)
  return bigFan
}
