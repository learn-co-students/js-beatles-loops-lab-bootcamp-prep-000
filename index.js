function theBeatlesPlay(musicians,instruments) {
  var array = [];
  
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
   
  return array;
  
}

function johnLennonFacts(facts) {
  let i = 0;
  var array = [];
  while (i < facts.length) {
    array.push(facts[i++] + "!!!");
  }
  return array;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array;
}

  
  
  
  
  
