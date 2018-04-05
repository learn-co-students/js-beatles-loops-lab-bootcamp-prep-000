function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = []
  for(var i=0;  i < musicians.length; i++) {
     beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArray
}

function johnLennonFacts(facts) {
  var loudFacts = [];
  var counter = 0;
  while(counter < facts.length) {
    loudFacts.push(facts[counter] + "!!!");
    counter++;
  }
  return loudFacts;
}

function iLoveTheBeatles(n) {
  var beatles = [];
  
  do {
    beatles.push("I love the Beatles!");
    n++;
  } while( n < 15)
  
  return beatles;
}