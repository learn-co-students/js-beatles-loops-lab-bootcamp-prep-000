const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay (musicians, instruments) {
  const arrayBeatlesComplete = []
  
  for (let i = 0, l = musicians.length; i < l; i++) {
    arrayBeatlesComplete.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arrayBeatlesComplete
}



const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(facts) {
    const arrayFactsExclamation = []
  
  let i = 0
  while (i < facts.length) {
    arrayFactsExclamation.push(`${facts[i]}!!!`)
    i++
  }
  return arrayFactsExclamation
}



function iLoveTheBeatles(number) {
  const arrayLove = []
    
  do {
    arrayLove.push('I love the Beatles!')
    number++ 
  }
  while (number < 15) 

  return arrayLove
}

