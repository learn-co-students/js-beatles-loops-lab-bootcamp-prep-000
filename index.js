// add solution here
function theBeatlesPlay (musicians, instruments) {
  const array = [];
  for (let i = 0, m = musicians.length; i < m; i++) {
    array.push (`${musicians [i]} plays ${instruments[i]}`);
  }
  return array;
}
function johnLennonFacts (facts) {
  const happyFacts = [];
  let i = 0;
  while (i < facts.length) {
    happyFacts.push (`${facts [i]}!!!`);
    i++;
  }
  return happyFacts;
}
function iLoveTheBeatles (n) {
  const loveBeatles = [];
  do {
    loveBeatles.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return loveBeatles;
}