function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (let i = 0 ; i < 4; i++) {
    newArray.push(musicians[i] + ' plays ' + instruments[i])
  } 
  return newArray
}

function johnLennonFacts(facts) {
  var i = 0
  var newArray = []
  while ( i < facts.length ) {
  newArray.push(facts[i++] + '!!!')
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push('I love the Beatles!');
    n += 1;
  }
  while ( n < 15 ); 
  return newArray
}