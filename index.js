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
  var factsAdd = [];
  while (facts.length > i){
    factsAdd.push(`${facts[i]}!!!`)
    i++;
  }
  return factsAdd
}

function iLoveTheBeatles(num){
  var cheer = [];
  do{
    cheer.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return cheer
}
