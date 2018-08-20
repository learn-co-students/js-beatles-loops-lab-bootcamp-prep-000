// add solution here

function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let counter = 0, length = musicians.length; counter < length; counter++) {
    array.push(`${musicians[counter]} plays ${instruments[counter]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const array = []
  let counter = 0
  while (counter < facts.length) {
    array.push(`${facts[counter]}!!!`)
    counter++
  }
  return array
}

function iLoveTheBeatles(num){
  const array = []
  do {
    array.push('I love the Beatles!')
    num++
  } while(num > 0 && num < 15)
  return array
}