function theBeatlesPlay(musicians, instruments) {
  const newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts) {
  const newArray = [];
  let i = 0;
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`)
    i++
  };
  return newArray
}

function iLoveTheBeatles(n) {
  const newArray = [];
  do {
    newArray.push('I love the Beatles!')
    n++
  } while (n < 15);
  return newArray
}