function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(let i=0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  const factoids = [];

  let i = 0;
  while(i<facts.length) {
    factoids.push(`${facts[i]}!!!`);
    i++;
  }
  return factoids;
}

function iLoveTheBeatles (number) {
  const arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return arr;
}
