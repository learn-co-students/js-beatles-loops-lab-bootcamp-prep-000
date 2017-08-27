function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for(let i=0; i< musicians.length; i++){
    newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArr
}

function johnLennonFacts(facts){
  var n = facts.length;
  var i = 0;
  while(i <= n-1){
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts
}

function iLoveTheBeatles(n){
  var empty = [];
  do{
    empty.push("I love the Beatles!")
    n++
  }while(n<15);
  return empty;
}
