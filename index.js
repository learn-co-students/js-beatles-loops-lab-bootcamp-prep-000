function theBeatlesPlay (musicians, instruments) {
  var music = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var add = "" + musicians[i] + " plays " + instruments[i];
    music.push(add);
  }
  return music;
}

function johnLennonFacts (facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return beatles;
}