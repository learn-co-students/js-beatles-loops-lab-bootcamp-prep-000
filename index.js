
function theBeatlesPlay(musicians, instruments) {
  var sentences = []

  for (var i = 0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentences;
}

function johnLennonFacts(facts) {
  var count = facts.length - 1
  
  while (count > 0) {
    facts[count] = facts[count] + "!!!";
    count--
  }

  return facts;
}

