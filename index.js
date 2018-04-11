function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for ( let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}
  
function johnLennonFacts(facts) {
  var i = 0;
  var result = [];
  while (i < facts.length) {
    result[i] = facts[i] + "!!!";
    i++;
  }
  return result;
}

function iLoveTheBeatles(i) {
  var result = [];
  do {
    result.push("I love the Beatles!"); 
    i++;
    }
    while (i < 15);
    return result;
}
