function theBeatlesPlay(musicians, instrument){
var empty=[]
for(let i=0; i <= musicians.length-1; i++){
 empty.push(musicians[i]+ " plays "+ instrument[i])
}
return empty
}

function johnLennonFacts(facts){
  var length = facts.length-1  
  while(length>=0){
    facts[length]= `${facts[length]}!!!` 
    length--
  }
  return facts
} 
function iLoveTheBeatles(number){
  var empty=[]
  do {
    empty.push("I love the Beatles!")
    number++
  } 
  while (number<15)
  return empty
}

