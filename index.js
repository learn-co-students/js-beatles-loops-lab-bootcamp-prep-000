function theBeatlesPlay(musicians, instruments) {
  var sentence = []
  
  for (var i = 0; i < musicians.length; i++) {
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}

function johnLennonFacts(facts) {
  var sentence = [];
  var i = 0;
 while (i < facts.length) {
   sentence.push(`${facts[i]}!!!`)
 }
 return sentence
}