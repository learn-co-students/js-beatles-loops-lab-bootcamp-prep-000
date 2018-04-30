function theBeatlesPlay(musicians, instruments){
  var iter =[]
  
  for(let i =0; i < musicians.length; i++){
    iter.push(musicians[i] + " plays " + instruments[i])
  }
  
  return iter
}

function johnLennonFacts(facts){
  var loop =0
  var iter =[]
  
  while(loop < facts.length){
    iter.push(facts[loop] +"!!!")
    loop++
  }
  
  return iter
}

function iLoveTheBeatles(n){
  var iter = []
  do{
    iter.push("I love the Beatles!")
    n += 1
  }while(n < 15);
  
  return iter
}