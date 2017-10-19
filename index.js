function theBeatlesPlay(musicians, instruments){
  var temp = [];
  for ( let i=0; i < musicians.length; i++){
    temp.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return temp
}

function johnLennonFacts(facts){
  for (let i=0; i < facts.length; i++){
    facts[i] = `${facts[i]}!!!`
  }
  return facts;
}

function iLoveTheBeatles(n){
  var array = [];
  do{
    array.push("I love the Beatles!");
  }while(array.length <= n && n < 15)
  return array;
}
