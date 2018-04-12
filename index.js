function theBeatlesPlay(musicians,instruments){
  let temp = [];
  for(var i = 0; i < musicians.length; i++){
    temp.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return temp;
}

function johnLennonFacts(facts){
  var count = 0;
  while(count < facts.length){
    facts[count] += '!!!';
    count++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var temp = [];
  var count = 0;
  do{
    temp.push(`I love the Beatles!`);
    count++;
  }
  while(count <= num && num < 15);
  return temp;
}