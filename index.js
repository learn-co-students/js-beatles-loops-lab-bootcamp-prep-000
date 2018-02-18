function theBeatlesPlay(musicians, instruments) {
  var array =[]
  for (var i = 0; i < musicians.length; i++ ) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}


function iLoveTheBeatles(n) {
  var array = []
  
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
  
  return array
}

function johnLennonFacts(facts) {
  var exFacts = []
  var index = 0
  while (index < facts.length) {
    exFacts.push(`${facts[index]}!!!`);
    index++;
  }
  return exFacts
}