// objective one: build a for loop

function theBeatlesPlay(musicians, instruments) {
  const arrmi = [];

  for ( let v = 0; v < musicians.length; v++ ) {
    arrmi.push(`${musicians[v]} plays ${instruments[v]}`)
  }

return arrmi;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  let i = 0;

  while ( i < facts.length ) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }

  return newFacts;

}

// iLoveBeatles function creates array containing strings
function iLoveTheBeatles(n) {
  const arr = [];
  do {
    arr.push(`I love the Beatles!`)
    n++;
  } while ( n < 15 );
  return arr;
}
