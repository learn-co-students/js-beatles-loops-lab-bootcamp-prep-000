function theBeatlesPlay(musicians, instruments){
  
  var bands = []
  
  for(var i = 0; i < musicians.length; i++){
    
    bands = [...bands, musicians[i] + " plays " + instruments[i]]
    
    
  }
  
  return bands
  
}



function johnLennonFacts(facts) {
  
  var i = facts.length
  
  while(i > 0){
    i--
    facts[i] = facts[i] + "!!!"
  }
  
  return facts
  
}


function iLoveTheBeatles(number){
  
  var array = []
  
  do{
    array.push("I love the Beatles!")
    number++
  }while(number < 15)
  
  return array
  
}