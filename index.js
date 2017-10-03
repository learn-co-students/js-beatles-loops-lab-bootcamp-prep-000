function theBeatlesPlay(musicians, instruments){
  const arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++){
    facts[i] += "!!!";
  }
  return facts;
}

function iLoveTheBeatles(num){
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
} 
