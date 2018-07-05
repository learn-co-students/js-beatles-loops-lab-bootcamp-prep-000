function theBeatlesPlay(musicians, instruments){
  let stringArr = [];
  for (var i = 0; i < musicians.length; i++){
    stringArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return stringArr;
}

function johnLennonFacts(facts){
  let stringArr = [];
  while (facts.length > 0){
    stringArr.push(`${facts.shift()}!!!`)
  }
  return stringArr;
}

function iLoveTheBeatles(n){
  let stringArr = [];
  do{
    stringArr.push("I love the Beatles!");
    n++;
  }while(n < 15)
  return stringArr;
}