// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var i;
  
  for (let i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(num) {
  var array = [];
  
  do {
    num++;
    array.push("I love the Beatles!");
  } 
  while (num < 15);
  
  return array;
}