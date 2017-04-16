function theBeatlesPlay(musicians, instruments) {
  var array = []
  var i = 0;
  for (i = 0; i < 4; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  const newFacts = [];
  let i = 0;
  while (i < facts.length){
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var heart = [];
  do {
    heart.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return heart;
}