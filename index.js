//#1
function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (let i = 0; i < musicians.length; i++){
    empty[i] = musicians[i]+` plays `+instruments[i];
 
  }
   return empty  
}

//#2

function johnLennonFacts(facts){
  let i=0
  while (i < facts.length){
    facts[i] = facts[i]+`!!!`;
    i++
  } 
  return facts
}

//#3
function iLoveTheBeatles(number){
  var array = []
  
   do {
    array.push(`I love the Beatles!`);
     number += 1
  } while (number < 15)
  return array
}
