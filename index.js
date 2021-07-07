// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  
  for (var i = 3; i > -1; i--) {
    arr.unshift(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  
  var i = facts.length - 1;
  while (i >= 0) {
  arr.unshift(facts[i] + "!!!");
  i--;
}

return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  
  do {
    arr.push("I love the Beatles!");
    num ++;
  } while (num < 15);
  
  return arr;
}
