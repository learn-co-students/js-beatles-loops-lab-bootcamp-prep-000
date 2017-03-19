function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = [];
  for (let i = 0; i < musicians.length; i++) {
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesPlay;
}

function johnLennonFacts(facts) {
  let i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    console.log(i++);
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var loveTheBeatles = [];
  do {
    loveTheBeatles.push("I love the Beatles!");
    console.log(n++);
  } while (n < 15);
  return loveTheBeatles;
}
