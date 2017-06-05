function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i =0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return array;
}

function johnLennonFacts(facts){
  var index = 0;
  while(index < facts.length){
    facts[index] = facts[index] + "!!!";
    index++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var array = [];
  var i = 0;
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i <= num && num < 15);
  return array;
}
