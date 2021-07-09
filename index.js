// add solution here

function theBeatlesPlay(musicians, instruments) {
  const array = []
  
  for(let i=0, len = musicians.length; i < len; i++) {
    array.push(`${musicians.shift()} plays ${instruments.shift()}`)
  }
  
  return array
}

function johnLennonFacts(facts) {
  const newFacts = []
  
  let i = 0
  while(i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  
  return newFacts
}

function iLoveTheBeatles(number) {
  const arr = []
  
  do {
    arr.push("I love the Beatles!")
    number++
  } while (number < 15);
  
  return arr
}