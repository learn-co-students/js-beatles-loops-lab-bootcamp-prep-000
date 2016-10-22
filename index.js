function theBeatlesPlay (musicians, instruments) {
  var players = [];
  for (var i = 0; i < musicians.length; i++) {
    var play = musicians[i] + " plays " + instruments[i];
    players.push (play)
  }
  return players
}

function johnLennonFacts (facts) {
  var newarray = [];
  var i = 0;
  while (i < facts.length) {
    var newFacts = facts[i] + "!!!";
    newarray.push (newFacts);
    i++;
  }
  return newarray;
}

function iLoveTheBeatles (count) {
  var music = [];
  do {
    music.push ("I love the Beatles!");
    count = count + 1;
  } while (count < 15);
    return music;
}
