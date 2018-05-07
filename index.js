function theBeatlesPlay(musicians, instruments) {
  var output = [];
  
  for (let i = 0; i < musicians.length; i++) {
    var phrase = `${musicians[i]} plays ${instruments[i]}`;
    output.push(phrase);
  }
  return output;
}

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + '!!!';
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var output = [];
  
  do {
    output.push("I love the Beatles!");
    n++;
  } while (n < 15);
  
  return output;
}