// add solution here
function theBeatlesPlay(muisicers,soundmakers) {
  let empArray = []
  for(let i = 0;i < muisicers.length;i++){
    empArray.push(`${muisicers[i]} plays ${soundmakers[i]}`)
  }
  return empArray
}
function johnLennonFacts(facts) {
  let newFacts = []
  let i = 0
  while(i < facts.length){
  newFacts[i] = facts[i] + '!!!'
  i++
    
  }
  return newFacts
}
function iLoveTheBeatles(numb){
  let empArray = []
  do { 
    empArray.push('I love the Beatles!')
    numb++
  } while(numb < 15)
  return empArray
}