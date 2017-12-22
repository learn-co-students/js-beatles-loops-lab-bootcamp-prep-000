function theBeatlesPlay(musicians, instruments) {
  let returnArray = [];
  for (var i = 0; i < musicians.length; i++) {
    returnArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return returnArray;
}

function johnLennonFacts(fact) {
  let i = 0;
  let listedFacts = [];
  while (i < fact.length) {
    listedFacts.push(`${fact[i]}!!!`);
    i++;
  }
  return listedFacts;
}

function iLoveTheBeatles(n) {
  let newArray = [];
  let i = 0;
  do {
    newArray.push('I love the Beatles!');
    i++;
  } while (i <= n && n < 15);
  return newArray;
}
