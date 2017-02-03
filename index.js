function theBeatlesPlay(musicians, instruments){
  var x = [];
  for (let i = 0; i < musicians.length; i++){
    x.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return x;
}
function johnLennonFacts(facts){
  for (let i = 0; i < facts.length; i++){
    facts[i] = facts[i].concat("!!!");
  }
  return facts;
}

function iLoveTheBeatles(n){
  var x = [];
  do {
    x.push("I love the Beatles!");
    n++;
    }
  while (n < 15);
  return x;
}
