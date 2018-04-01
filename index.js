function  theBeatlesPlay(musicians, instruments){
  
  var lineup = []
  
  for (var i = 0; i < musicians.length; i++){
    
    lineup.push(`${musicians[i]} plays ${instruments[i]}`)
    
  }
  
  return lineup
  
}

function johnLennonFacts(facts){
  
  var i = 0
  
  while (i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  
  return facts
}
 
function iLoveTheBeatles(n){
  var list = []
  
  do{
    list.push("I love the Beatles!")
    n++
  } while (n < 15);
  
  return list
}


