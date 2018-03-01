function theBeatlesPlay(musicians , instruments){
  var arr = new Array()
   for(var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return arr
}

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  
  return facts
}

function iLoveTheBeatles(numb){
  var arr = new Array()
  do{
    arr.push("I love the Beatles!")
    numb++
  }while(numb < 15)
  
  return arr
}
