function theBeatlesPlay(musicians, instruments) {
  let empty = [];
  for (let i = 0; i <= musicians.length - 1; i++) {
    let string = `${musicians[i]} plays ${instruments[i]}`;
    empty.push(string);
  }
  return empty;
}
function johnLennonFacts(facts) {
  let i = 0;
  let empty = [];
  while (i < facts.length ) {
    let string = `${facts[i]}!!!`;
    empty.push(string);
    i++;
  }
  return empty;
}
function iLoveTheBeatles(n) {
  let empty = [];
  do {
    empty.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return empty;
}


