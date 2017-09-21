const theBeatlesPlay = function(musicians, instruments) {
  const beatles = [];
  for (let i = 0; i < musicians.length; i++) {
    beatles[i] = musicians[i] + ' plays ' + instruments[i];
  }
  return beatles;
}

const johnLennonFacts = function(facts) {
  const lennonFanFacts = [];
  let i = 0;
  while (i < facts.length) {
    lennonFanFacts.push(facts[i] + '!!!');
    i++;
  }
  return lennonFanFacts;
}

const iLoveTheBeatles = function(n) {
  const beatleCheers = [];
  do {
    beatleCheers.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return beatleCheers;
}
