function theBeatlesPlay( musArray, instArray ) {
  var output = musArray.map((c,i) => c + " plays " + instArray[i]);
  return output;
}

function johnLennonFacts(array) {
  var output = array.map( c => c + "!!!");
  return output;
}

function iLoveTheBeatles( num ) {
  const output = [];
  var i = 15 - num;
  do {
    i--;
    output.push("I love the Beatles!");
  } while ( i > 0 )
  return output;
}