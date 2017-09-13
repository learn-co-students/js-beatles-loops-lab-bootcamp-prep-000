function theBeatlesPlay(musicians, instruments) {
  var plays = [];
  for(var i = 0; musicians.length > i; i++) {
    plays.push(musicians[i] + " plays " + instruments[i]);
  }
  return plays;
}

function johnLennonFacts(arg) {
  var newFacts = [];
  var len = arg.length;
  var i = 0;
  while(i < len) {
  newFacts.push(arg[i] + "!!!");
  i++;
}
  return newFacts;
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15) {

  }
  return love;
}
