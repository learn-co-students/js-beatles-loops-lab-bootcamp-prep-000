function theBeatlesPlay(musicians, instruments){
  var string = [];
  for (var i = 0; i < musicians.length; i++){
    string.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return string;
}

function johnLennonFacts(facts){
  var exclamation = []
  var i = 0
  while (i < facts.length){
    exclamation.push(facts[i] + '!!!')
    i++;
  }
  return exclamation
}

function iLoveTheBeatles(n){
  var empty = []
  do {
    empty.push("I love the Beatles!")
    n++
  } while(n < 15);
return empty;
}

