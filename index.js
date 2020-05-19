var array = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
      array.push (`${musicians[i]} plays ${instruments[i]}`);
  }
return array;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  let n = 0;
  
  while (n < facts.length) {
    newFacts[n] = facts[n] + "!!!";
    n++;
  }
  
return newFacts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  let i = num; 
    
    do {arr.unshift("I love the Beatles!") + i;
      i++;
    }
    while (i < 15);
      
  return arr;
}