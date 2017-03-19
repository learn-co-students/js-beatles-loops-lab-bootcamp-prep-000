function theBeatlesPlay(musicians, instruments){
  var sentence = [];
  for(let i = 0; i < musicians.length; i++){
    sentence.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentence;
}

function johnLennonFacts(facts){
  var len = facts.length-1;
  while(len >= 0){
    facts[len] = `${facts[len]}!!!`;
    len--;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
  }while(++number < 15);
  return array;
}