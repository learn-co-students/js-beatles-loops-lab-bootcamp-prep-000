// add solution here
function theBeatlesPlay (musicians, instruments) {
  
  var newArray = [];
 
  for (let i = 0; i < musicians.length; i++) {
   
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return newArray;
}

function johnLennonFacts (facts) {
  var i = 0;
  var hypeFacts = [];
  while (i < facts.length) {
    hypeFacts.push(facts[i] + '!!!');
    i ++;
  }
  return hypeFacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return array;
}
