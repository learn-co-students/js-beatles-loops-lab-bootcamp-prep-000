
function theBeatlesPlay(musicians, instruments) {
  var sentences = []

  for (var i = 0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentences;
}

function johnLennonFacts(facts) {
  var count = facts.length - 1
  
  while (count >= 0) {
    facts[count] = facts[count] + "!!!";
    count--
  }

  return facts;
}

function iLoveTheBeatles(n) {
  var message = []
  
  do {
    message.push("I love the Beatles!");
  } while( n < 15 && n > 0);
  
  return message;
}
