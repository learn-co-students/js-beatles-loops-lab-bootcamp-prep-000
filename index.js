function theBeatlesPlay(musicians, instruments){
  
  var newarray = []
  
  
  for (var i = 0; i<musicians.length; i++ ){
  
  newarray.push(musicians[i]+" plays "+instruments[i]  )
  
  
  }
  
  return newarray
  
  }
  
function johnLennonFacts(facts) {
  var i = 0
  while (i<facts.length){
    
    facts[i]= facts[i]+"!!!"
    i++
    
    
  }
  return facts;
}

function iLoveTheBeatles(number) {
  
  var newarray = []
  
  do {
    newarray.push("I love the Beatles!")
    number++
  }while (number<15)
  
  
  return newarray
  
  
}