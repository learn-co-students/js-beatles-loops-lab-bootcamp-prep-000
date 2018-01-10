function theBeatlesPlay(musicians, instruments) {
  var x = []; 
  for (var n = 0; n < musicians.length; n++) {
    x.push(musicians[n]+" plays "+instruments[n]);
    
  }
  return x;
}

function johnLennonFacts(facts) {
  var x2 = [];
  var f=0;
  while (f<facts.length) {
    x2.push(facts[f]+"!!!");
    f++;
  }
  return x2;
}

function iLoveTheBeatles(num) {
  var x3 = [];
  do {
    x3.push("I love the Beatles!");
    num++;
  }
  while (num<15);
  return x3;
}