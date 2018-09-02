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
  while ( facts.length === 4 && i < 4 ) {
  newArray.push(facts[i++] + '!!!')
  }
  while (facts.length === 2 && i < 2){
  newArray.push(facts[i++] + '!!!')
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var newArray = []
  function incrementVariable() {
    n += 1;
  }
  
  do {
    newArray.push('I love the Beatles!');
    n += 1;
  }
  while ( n < 15 ) {
    newArray.push('I love the Beatles!')
  }
  newArray.pop();
  return newArray
}