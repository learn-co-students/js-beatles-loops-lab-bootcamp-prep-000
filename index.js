// What instrument do the members of The Beatles play loop
function theBeatlesPlay(musicians, instruments) {
  var Beatles = [];
  for (let i = 0; i < 4; i++) {
    Beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return Beatles;
}

// John Lennon facts
function johnLennonFacts(facts) {
  var i = 0;
  var yellingFacts = []; 
  while(yellingFacts.length < facts.length) {
   yellingFacts.push(facts[i]+'!!!');
    i++;
  }
 return yellingFacts;
}

// I Love the Beatles [ do-while loop ]
function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    n++;
  } 
    while(n < 15); {
    return array;
  }
}