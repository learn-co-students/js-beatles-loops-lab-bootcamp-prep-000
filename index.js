function theBeatlesPlay(musicians, instruments) {
  var b = [];
  for (let i = 0; i < 4; i++){
    b.push(musicians[i] + ' plays ' + instruments[i])
  }
    return b
}


function johnLennonFacts(facts) {
  var a = 0;
  var c = [];
  while (facts[a] !== undefined) {
      c.push(facts[a] + '!!!')
      a++
  }
  return c
}

function iLoveTheBeatles(n) {
    var s = [];
    do {
        s.push('I love the Beatles!')
        n++;
    }   while (n < 15);
  return s;
}
