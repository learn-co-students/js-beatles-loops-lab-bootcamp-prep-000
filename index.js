function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var result = [];
  var i = 0;
  while (i < facts.length) {
    result.push(facts[i] + "!!!");
  }  
  return result;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
return array;    
}
