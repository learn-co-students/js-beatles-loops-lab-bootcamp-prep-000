function theBeatlesPlay(musicians,instruments){
  var result = []
  for (let i=0;i<musicians.length;i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`)
    
  }
  return result 
}

function johnLennonFacts(facts){
  var arr = [];
  var i = 0;
  while(i < facts.length){
    arr.push(`${facts[i]}!!!`)
    i++
  }
  return arr
}

function iLoveTheBeatles(number){
  var arr = []
  var i = 0
  do{
    arr.push("I love the Beatles!")
    i++
  }
  while(number < 15 && i < (15 - number));
  
  return arr
}