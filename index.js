function theBeatlesPlay(musician, instruments) {
  var theBeatles = [];
  for (var i = 0; i < musician.length; i++) {
    var text = `${musician[i]}`+` plays `+`${instruments[i]}`;
    theBeatles.push(text);
  }
  return theBeatles
}

function johnLennonFacts(facts) {
  var n = 0;
  var newFacts = [];
  while (n < facts.length) {
    newFacts.push(`${facts[n]}` + `!!!`);
    ++n
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var beatlesLove = [];
  do {
    beatlesLove.push("I love the Beatles!");
    ++n
  } while (n < 15)
  return beatlesLove
}
