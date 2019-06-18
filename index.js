var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var intstruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, intstruments) {
  var array = []
  for(let i = 0, l = musicians.length; i < l; i++) {
    array.push (`${musicians[i]} plays ${intstruments[i]}`)
  }
  return array
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(facts) {
  var shoutedFacts = []
  
  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
  
  return shoutedFacts
}

function iLoveTheBeatles(n) {
  var array = []
  
  do {
    array.push("I love the Beatles!")
    n++
  }
  while(n < 15)
  
  return array
}