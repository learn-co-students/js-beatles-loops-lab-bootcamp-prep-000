function theBeatlesPlay (musicians, inst) {
  var array = []
  for (var i=0;i<musicians.length;i++){
    
    array.push(`${musicians[i]} plays ${inst[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
 var factArray = []
 var y = 0
  while  ( y < facts.length){
    factArray.push(facts[y] + "!!!")
    y++;
  }
  return factArray;
}

function iLoveTheBeatles (num){
  var number = []
  var pass = 0
  do { number.push("I love the Beatles!")
    num++
  }
  while(num<15)
  return number
}
