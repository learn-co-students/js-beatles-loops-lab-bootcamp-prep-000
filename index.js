function theBeatlesPlay(musicians,instruments) {
  var plays = new Array();
  for (let i = 0; i < musicians.length; i++) {
    plays.push(musicians[i] + " plays " + instruments[i])
  }
  return plays;
}

function johnLennonFacts(facts) {
  var excitedFacts = new Array();
  while (excitedFacts.length < facts.length) {
    excitedFacts.push(facts[excitedFacts.length] + "!!!");
  }
  return excitedFacts;
}

function iLoveTheBeatles(num) {
  var love4Beatles = new Array();
  do {
    love4Beatles.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return love4Beatles;
}
