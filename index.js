function theBeatlesPlay(musicians,instruments){
  var arr=[]
  var i;
  for (i = 0; i < musicians.length; i++) { 
    arr.push(musicians[i] + ' plays '+ instruments[i])
  }
  return arr
}
function johnLennonFacts(facts){
  var arr=[]
  while(facts.length>0){
    arr.push(facts[0] + "!!!")
    facts.shift()
  }
  return arr
}

function iLoveTheBeatles(n){
  var arr=[]
  
  do{
    arr.push("I love the Beatles!")
    n++
  }while(n<15)
  return arr
  
}