function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let n = 0; n < musicians.length; n++) {
      array.push(`${musicians[n]} plays ${instruments[n]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  
  var n = 0;
  
  while (n < facts.length) {
    facts[n] += "!!!";
    n++
  }
  return facts;
    
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
  } while (n++ && n < 15);
  return array;
  
}