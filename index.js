function theBeatlesPlay (musicians, instruments){
  let newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts (facts) {
  let newArray = [];
  while (facts.length > newArray.length) {
    newArray.push(facts[newArray.length] + '!!!')
  }
  return newArray
}

function iLoveTheBeatles (n) {
  let newArray = [];
  do {
    newArray.push('I love the Beatles!')
    n++
  } while (n < 15)
  return newArray
}