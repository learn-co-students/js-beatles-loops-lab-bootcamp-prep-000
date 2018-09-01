function theBeatlesPlay(mus, inst) {
  var emptyArray = [];
  for (let i = 0; i < mus.length; i++) {
var text = mus[i] + " plays " + inst[i];
emptyArray.push(text);    
  }
return emptyArray;
}
function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(n) {
  var emptyArray = [];
  do {emptyArray.push("I love the Beatles!");
  n++;
  } while (n < 15);
  return emptyArray;
}