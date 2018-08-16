// add solution here
function theBeatlesPlay(musicians, instruments){
  const array = []
  for(let i=0; i< musicians.length; ++i){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  const newFacts = []
  let i = 0;
  while(i< facts.length){
    newFacts.push(facts[i] + "!!!")
    ++i
  }
  return newFacts
}

function iLoveTheBeatles(num){
  const array = []
  do {
    array.push("I love the Beatles!")
    num++
  } while(num< 15)
  return array
}
