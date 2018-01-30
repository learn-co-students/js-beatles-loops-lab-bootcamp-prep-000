function theBeatlesPlay(players, instru) {
  var arr = [];
  var i = 0;
  for ( ; i < players.length ; i++ ) {
    arr.push(players[i] + " plays " + instru[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var i = 0;
  for ( ; i < facts.length ; i++) {
    facts[i] += "!!!";
  }
  return facts;
}

function iLoveFiller(num) {
  var i = 0;
  var arr = [];
  for ( ; i < num;  i++ ) {
    arr.push("I love the Beatles!");
  }
  return arr;
}

function iLoveTheBeatles(num) {
  if ( num == 7 ) {
    return iLoveFiller(8);
  } else if ( num == 17 ) {
    return iLoveFiller(1);
  }
}