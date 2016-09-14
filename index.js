function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for (var i = 0; i < musicians.length ; i++) {
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return beatlesArray;
}


function johnLennonFacts(facts) {
  let i = 0
  while ( i < facts.length ) {
    facts[i]=`${facts[i]}!!!`
    i += 1
  }
  return facts
}


function iLoveTheBeatles(n) {
  var beatlesArray = [];
  do {
    beatlesArray.push("I love the Beatles!")
  } while ( ++n < 15 );
  return beatlesArray
}
