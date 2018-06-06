function theBeatlesPlay (artArr, instArr) {
  
  var arr = []
  for (let i =  0; i < artArr.length; i++) {
    
    arr[i] = artArr[i] + ' plays ' + instArr[i]
    
  }
  
  return arr
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
  
  var j = 0;
  while (j < facts.length){
    
    facts[j] = facts[j] + "!!!"
    
  }
  return facts
  
}

function iLoveTheBeatles(num) {
  
  var arr = []
  do {
    
    arr.push('I love the Beatles!')
    num++
    
  } while (num < 15) 
  
}