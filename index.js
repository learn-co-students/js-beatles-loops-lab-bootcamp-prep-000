function theBeatlesPlay(musicians, instruments) {
  var pairing = [];
  for (var i = 0; i < musicians.length; i++){
    pairing.push(musicians[i] + " plays " + instruments[i]);
  }
  return pairing;
}

function johnLennonFacts(facts){
  var exclamation = [];
  var i = 0
  while(i < facts.length){
    exclamation.push(facts[i] + "!!!");
    i++;
  }
  return exclamation;
}

function iLoveTheBeatles(num){
  var beatles = [];
  do {
    beatles.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return beatles;
}
