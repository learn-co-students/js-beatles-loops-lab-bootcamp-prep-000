function theBeatlesPlay(musicians, instruments) {
  var music = [];
  for (var i = [0]; i < 4; i++) {
    music.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return music;
}

function johnLennonFacts(facts) {
  const loudFacts = [];
  let i = 0;
  while (i < facts.length) {
    loudFacts.push(`${facts[i]}!!!`)
    i++
  }
  return loudFacts;
}

function iLoveTheBeatles (n) {
  var array = [];
  do {array.push("I love the Beatles!");
  n++}
  while (n<15);
  return array;
}
