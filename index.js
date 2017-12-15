function theBeatlesPlay(musicians, instruments){
  var acc = [];
  for (var i = 0; i < musicians.length; i++){
  //  acc.push(musicians[i] + " plays " + instruments[i]);
  acc.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return acc;
}

function johnLennonFacts(facts){
  var exclamationFacts = [];
  while (facts.length > 0){
    exclamationFacts.push(facts.shift() + "!!!");
  }
  return exclamationFacts;
}

function iLoveTheBeatles(n){
  var acc = [];
  do{
    acc.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return acc;
}
