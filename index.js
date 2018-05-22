function theBeatlesPlay(musicians, instruments) {
  var result = [];
  
  for ( var index = 0; index < musicians.length; index++) {
    result.push(`${musicians[index]} plays ${instruments[index]}`);
  }
  
  return result;
}

function johnLennonFacts(facts) {
  var result = [];
  
  for (var index = 0; index < facts.length; index++) {
    result.push(`${facts[index]}!!!`);
  }
  
  return result;
}

function iLoveTheBeatles(number){
  var result = [];
  
  do {
    result.push('I love the Beatles!');
    number++;
  } while (number < 15);
  
  return result;
}