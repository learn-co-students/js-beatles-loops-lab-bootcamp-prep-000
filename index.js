function theBeatlesPlay( musicians, instruments ) {
  var arr = [];

  for ( let i = 0; i < musicians.length; i++ ) {
    arr.push( `${musicians[i]} plays ${instruments[i]}`);
  }

  return arr;
}

function johnLennonFacts( facts ) {
  let counter = 0;

  while ( counter < facts.length ) {
    facts[counter] = facts[counter] + "!!!";
    counter++;
  }

  return facts;
}

function iLoveTheBeatles( n ) {
  let arr = [];

  do {
    arr.push( "I love the Beatles!" );
    n++
  } while ( n < 15 )

  return arr;
}
