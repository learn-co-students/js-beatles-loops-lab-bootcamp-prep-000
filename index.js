function theBeatlesPlay(music,tool) {
  var slate = [];
  for (var i=0; i<music.length;i++) {
    slate[i] = music[i] + ' plays ' + tool[i];
  }
  return slate;
}

function johnLennonFacts(list) {
  var slate = [];
  var i = 0;
  while ( i < list.length) {
    slate[i] = list[i] + "!!!";
    i++;
  }
  return slate;
}

function iLoveTheBeatles(digit) {
  var slate = [];
  do {slate.push("I love the Beatles!");
    digit++;
  } while (digit<15)
  return slate;
}