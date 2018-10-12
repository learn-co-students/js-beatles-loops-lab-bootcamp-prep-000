// add solution here
function theBeatlesPlay(musicians, instruments){
  const allbeatles = [];
  
  for (var i = 0, l = musicians.length; i < l; i++) {
    allbeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return allbeatles
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var array = [];
  var i = 0;
  do {
    array.push("I love the Beatles!");
    i++;
  }
  while(i <= n && n < 15)
  return array;
}

