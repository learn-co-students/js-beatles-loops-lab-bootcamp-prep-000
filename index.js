function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}


function johnLennonFacts(facts) {
  var n = 0;
  
  while (n < facts.length) {
    facts.splice([n], 1, facts[n] + "!!!");
    console.log(++n);
  }
    return facts;
}


function iLoveTheBeatles(i) {
  var array = []
  
  do {
    array.push("I love the Beatles!");
    i = i + 1;
  } while (i < 17)
  return array
}