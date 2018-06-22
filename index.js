function theBeatlesPlay (musicians, instruments){
  var players = [];
  for (var i=0; i < musicians.length; i++){
    players.push(musicians[i] + ' plays ' + instruments[i])
  }
  return players
  
}

function johnLennonFacts (facts){
  var newfacts = [];
  var i=0;
  while (i < facts.length ){
    newfacts.push(facts[i]+'!!!');
    i++;
  }
  return newfacts
}

function iLoveTheBeatles (n) {
  var expression = [];
  do {
    expression.push('I love the Beatles!')
    n++
  }
  while (n<15);
  return expression
}