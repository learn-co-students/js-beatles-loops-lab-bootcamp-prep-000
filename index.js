function theBeatlesPlay(musicians, instruments) {
    var beatlesPlay = [];
    for (var i = 0; i < musicians.length; i++) {
        beatlesPlay.push(musicians[i] + " plays " + instruments[i])
    };
  return beatlesPlay
}

function johnLennonFacts(facts) {
    var factsExclaimed = [];
    var i = 0;
    while (i < facts.length) {
      factsExclaimed.push(facts[i] + "!!!");
      i++
    }
    return factsExclaimed
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return love
}
