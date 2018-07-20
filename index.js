// add solution here
function theBeatlesPlay(musicians, instruments){
  
  var emptyArray = []
  for(let i =0;i<musicians.length;i++){
    
    var string = `${musicians[i]} plays ${instruments[i]}`
    emptyArray.push(string)
    
  }
  
  return emptyArray
}

function johnLennonFacts(facts){
 var i = facts.length-1
  while(i>=0){
    facts[i]=`${facts[i]}!!!`
    i--
  }
  return facts
}

function iLoveTheBeatles(value){
  
  var factsArray = []
  
  do{
    factsArray.unshift("I love the Beatles!")
    value++
  }while(value<15)
  
  return factsArray
}