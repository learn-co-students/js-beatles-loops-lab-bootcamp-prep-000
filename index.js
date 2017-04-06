function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for (var i=0; i<musicians.length; i++) {
    var musicPlusInstrum = `${musicians[i]} plays ${instruments[i]}`
    beatlesArray.push(musicPlusInstrum);
  }
  return beatlesArray;
}

function johnLennonFacts(facts) {
  const n = 0;

  while (n<facts.length) {
    facts[n] = `facts[n]!!!`;
  }
  return facts;
}