var beatles = [];
var facts = [];

function theBeatlesPlay(musicians, instruments){
  for (var i = 0; i < 4; i++){
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles
}

function johnLennonFacts(facts){
  var i = 0;
  while (facts.length > i){
    console.log(facts[i] + "!!!");
  }
  return facts
}
