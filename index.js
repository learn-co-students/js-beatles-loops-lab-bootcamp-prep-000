function theBeatlesPlay (musicians,instruments){
  var newArr= [];
  for (var i=0; i<musicians.length; i++){
    newArr[i]=`${musicians[i]} plays ${instruments[i]}`;
  }
  return newArr;
}

function johnLennonFacts(facts){
  var i = facts.length-1;
  while (i>=0){
    facts[i]=`${facts[i]}!!!`;
    i--;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var newArr= [];
  do{
    newArr.push("I love the Beatles!");
    n++;
  }while (n<15);
  return newArr;
}
