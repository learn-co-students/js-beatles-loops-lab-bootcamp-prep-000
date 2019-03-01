function theBeatlesPlay(musicians, instruments){
  var array = []
  for(let i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts){
  let i = 0
  while(i < facts.length){
    facts[i] += "!!!"
    console.log(i++)
  }
  return facts
}

function iLoveTheBeatles(num){
  var array = []
  
  do{
    array.push("I love the Beatles!")
    num = num + 1
  }while(num <15)
  
  return array
}
