function theBeatlesPlay(musicians, instruments){
  var temp = [];
  var i = 0
  for(i; i < musicians.length; ++i){
    temp.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return temp
}

function johnLennonFacts(facts){
  var i = 0
  var temp = [];
  while(i < facts.length){
    temp.push(`${facts[i]}!!!`)
    ++i
  }
  return temp
}

function iLoveTheBeatles(n){
  var temp = [];
  var i = 0
  do{
    temp.push("I love the Beatles!")
    ++i
  }while(i <= n && n < 15);
  return temp
}
