function theBeatlesPlay(musicians,instruments) {
  var empty= [];
  for(let i=0;i<musicians.length;i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}


function johnLennonFacts(facts) {
  let i=0;
  var scream = [];
    while(i<facts.length) {
        scream.push(`${facts[i]}!!!`);
        i++;
    }
    return scream;
}

function iLoveTheBeatles(number) {
  var e = [];
  do {
    e.push("I love the Beatles!");
    number++;
  }
  while (number<15);
  return e;
}