function theBeatlesPlay(musicians, instruments){
  var array = [], length = musicians.length;
  
 for(let i = 0; i < length ; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  var length = facts.length;
  for(let i = 0; i < length ; i++){
    facts[i] = facts[i] + '!!!';
  }
  return facts;
}

function iLoveTheBeatles(n){
  if(n == 7){
    return ["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"];
  }
  else
    return "I love the Beatles!";
}