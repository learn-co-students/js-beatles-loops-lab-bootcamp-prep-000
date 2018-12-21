function theBeatlesPlay(musicians, instruments) {
  const empty = [];
  var i = 0; 
  var x = musicians.length;
  for (i = 0; i < x ; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

 
function johnLennonFacts(array) {
 
  var a = 0;
  var facts = [];
  
  while (array.length > facts.length) {
    
    facts.push(`${array[a]}!!!`);
    a++;
    }
  return facts; 
}

function iLoveTheBeatles (n) {
  var emptyish = [];
  var x = n;
  
  do { emptyish.push("I love the Beatles!");
    n++;
  }
     while (n < 15); {
      }
  return emptyish;
}
  