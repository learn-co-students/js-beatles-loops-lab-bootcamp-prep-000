// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < 4; i++) {
    var newString = `${musicians[i]} plays ${instruments[i]}`;
    emptyArray.push(newString)
  }
 return emptyArray;
}

function johnLennonFacts(facts) {
  var newArray = [];
  let i = facts.length - 1;
  while (i >= 0) {
    var newFact = `${facts[i]}!!!`;
    i--;
    newArray.unshift(newFact);
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var emptyArray = [];
  do {
    emptyArray.unshift("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return emptyArray;
  
  
}
   
 