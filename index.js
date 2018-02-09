function theBeatlesPlay(musicians, instruments) {
  const array = [];

  for (let i = 0; i < musicians.length; i++) {
    var newString = `${musicians[i]} plays ${instruments[i]}`;

    array.push(newString);
  }

  //console.log(array);
  return array

}

function johnLennonFacts(facts) {
  const newFacts = [];
  let i = 0;
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    ++i
  }

  return newFacts
}

function iLoveTheBeatles(n) {
  const array = [];

  do {
    array.push("I love the Beatles!");
    ++n
  } while (n < 15);

  return array;
}
