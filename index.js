var beatles = [];

function theBeatlesPlay(musicians, instruments){
  for (var i = 0; i < 4; i++){
    beatles.push(musicians[i] + " plays " + instruments[i]);
  };
  return beatles;
}

function johnLennonFacts(facts){
  var i = 0;
  var john = [];
  while (facts.length > i) {
    john.push(facts[i++]+"!!!");
  }
  return john;
}

function iLoveTheBeatles(n){
  var behold = [];
  do {
    behold.push("I love the Beatles!")
  }
  while (n < 15 && n--);
  return behold;
}
