function theBeatlesPlay(musicians, instruments) {
  var BeatlesPlay = [];
  for (var i = 0; i < musicians.length; i++){
    BeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return BeatlesPlay
}

function johnLennonFacts(facts) {
  var sentences = [];
  for (var i = 0; i < facts.length; i ++) {
    sentences.push(`${facts[i]}!!!`);
  }
  return sentences
}

function iLoveTheBeatles(n) {
  var repeat = [];
  do {
    repeat.push(`I love the Beatles!`)
    n++
  } while (n < 15);
return repeat
}
