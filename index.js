const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay (musicians, instruments) {
  var beatles = []
  for (let x = 0 ; x < musicians.length ; x++ ) {
    beatles.push(musicians[x] + ' plays ' + instruments[x])
    /*beatles.push(`${musicians[x]} plays ${instruments[x]}`)*/
  }
  return beatles
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
  var factsPlusExclamation = []
  var x = 0
  while (x < facts.length) {
    factsPlusExclamation.push(facts[x] + "!!!")
    x++
  }
  return factsPlusExclamation
  
  /*var x = 0
  while (x < facts.length) {
    facts[x] = facts[x] + "!!!"
    x++
  } 
  return facts*/
}

function iLoveTheBeatles (number) {
  var beatlesLoveList = []
  do {
    beatlesLoveList.push("I love the Beatles!")
    number++
  } while (number < 15)
  return beatlesLoveList
}