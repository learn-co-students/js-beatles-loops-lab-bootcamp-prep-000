function theBeatlesPlay(m, ins) {
  var x = []; 
  for(var i = 0; i < m.length; i++)
  x.push(m[i] + " plays " + ins[i])
  return x
}

function johnLennonFacts(facts) {
  var x = [];
  var i = 0
while (facts.length > x.length) 
  x.push(facts[i++] + "!!!")
  return x
}

function iLoveTheBeatles (n) {
  var x = [];
  do {
    x.push("I love the Beatles!")
    n++
  }
  while (n < 15);
  return x
}