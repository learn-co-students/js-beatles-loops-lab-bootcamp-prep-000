function theBeatlesPlay( a, b ) {
  var newArray = [];
  var newSentence;
  for ( var x = 0; x < a.length; x++ ) {
    newSentence = `${ a[ x ] } plays ${ b[ x ] }`;
    newArray.push(newSentence);
  }
  return newArray;
}

function johnLennonFacts( a ) {
  var newArray = [];
  var x = a.length;
  while ( x > 0 ) {
    newArray.unshift( `${a.slice( x - 1, x )}!!!` );
    x--;
  }
  return newArray;
}

function iLoveTheBeatles( a ) {
  var newArray = [];
  do {
    newArray.push( 'I love the Beatles!' );
    a++;
  } while ( a < 15 );
  return newArray;
}
