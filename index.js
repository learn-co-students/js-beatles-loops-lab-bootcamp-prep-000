function theBeatlesPlay(music, instrument) {
  var plays = [];
  for (var i = 0; i < music.length; i++) {
    var str = music[i] + " plays " + instrument[i];
    plays.push(str);
  }
  return plays;
}

function johnLennonFacts(facts) {
  const shoutedFacts = [];

  let i = 0;
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`);
    i++;
  }

  return shoutedFacts;
}

function iLoveTheBeatles(number) {
    var empty = [];
    do {
      empty.push("I love the Beatles!");
      number++;
    } while (number < 15);
    return empty;
}