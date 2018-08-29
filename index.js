// add solution here
function theBeatlesPlay (musicians, instruments) {
  var temp = []; var i;
  for (i = 0; i<musicians.length; i++) {
    var stat = musicians[i] + ` plays ` + instruments[i]
    temp[i] = stat
  }
  return temp
}

function johnLennonFacts (facts) {
  var i = 0; var temp = [];
  while (i < facts.length) {
    var stat = facts[i] + `!!!`
    temp[i] = stat;
    i++;
    
  }
  return temp
}
function iLoveTheBeatles (num) {
  var temp = []; 
  var i = 0;
  do {
    temp[i] = `I love the Beatles!`;
    num++; i++;
  } while (num < 15) 
  return temp
}