// add solution here
function theBeatlesPlay(musicians, instruments) {
    let thing = [];
    for (let i = 0; i < musicians.length; i++) thing.push(musicians[i] + ' plays ' + instruments[i]);
    return thing;
}

function johnLennonFacts(facts) {
  let newFacts = [];
  let i = 0;
  while(i < facts.length) {
     newFacts.push(facts[i] +"!!!");
        i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  let thing = [];
  do {
  thing.push('I love the Beatles!');
  n++;
} while (n < 15);
  return thing;
}