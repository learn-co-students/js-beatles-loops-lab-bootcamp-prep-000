function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++){
    facts[i] = `${facts[i]}!!!`;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n = n - 1;
  } while (n < 15 && n >= 0);
  return arr;
}