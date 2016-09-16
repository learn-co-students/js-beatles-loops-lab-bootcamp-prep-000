function theBeatlesPlay (musicians, instruments){
  var array = [];
  for (var i = 0, m = musicians.length; i < m; i++){
     array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  const johnFacts = [];
   var i = 0;
  while(  i < facts.length) {
    johnFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return johnFacts;
}

function iLoveTheBeatles(n){
  const array = [];

    do {
      array.push("I love the Beatles!");
      n++;
    }
    while( n < 15)
  return array ;
}
