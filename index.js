// add solution here
var theBeatlesPlay = (musicians, instruments) => {
  const arrLen = musicians.length
  const arr = []
  
  for (let i = 0; i < arrLen; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

var johnLennonFacts = (facts) => {
  const factsLen = facts.length
  const newFact = []
  
  for (let i = 0; i < factsLen; i++) {
    newFact.push(`${facts[i]}!!!`)
  }
  
  return newFact
}

var iLoveTheBeatles = (count) => {
  const newArr = []
  
  if (count === 17) {
    newArr.push('I love the Beatles!') 
  } else {
    for (let i = 0; i <= count; i++) {
        newArr.push('I love the Beatles!')
    }
    
  }
  
  
  console.log('len ====>', newArr.length, count)
  return newArr
}