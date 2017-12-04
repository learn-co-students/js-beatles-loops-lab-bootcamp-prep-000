function theBeatlesPlay(musicians, instruments){
  var x = [];
  for(var i = 0; i < musicians.length; i++){
    x = [...x, musicians[i] + " plays " +instruments[i]];
  }
  return x;
}

function johnLennonFacts(fact){
  var a = [];
  var c = fact.length ;
  while (c > 0){
    a = [fact[--c] + '!!!',...a];

  }
  return a;
}

function iLoveTheBeatles(n){
  var x = [];
  do {
   x = ["I love the Beatles!",...x];
    ++n;
  } while (n< 15);
  return x;
}
