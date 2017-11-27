function theBeatlesPlay(musos, instruments) {
  let combos = [];
  for(let i = 0; i < musos.length; i++) {
    combos.push(`${musos[i]} plays ${instruments[i]}`)
  }
  return combos
}

function johnLennonFacts(facts) {
  var newfacts = [];
  for(let i=0; i < facts.length; i++) {
   newfacts.push(`${facts[i]}!!!`);
  }
  return newfacts;
}

function iLoveTheBeatles(num) {
  var val = [];
  do {
    val.push("I love the Beatles!");
    ++num;
  } while (num < 15);
  return val;
}