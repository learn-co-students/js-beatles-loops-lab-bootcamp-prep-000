function theBeatlesPlay(musicians, instruments) {
  var sentence = []
  
  for (var i = 0; i < musicians.length; i++) {
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}

function johnLennonFacts(facts) {
 var i = 0;
 var newArray = [];
 while (i < facts.length) {
   newArray.push(facts[i] + '!!!');
   i++;
 }
 return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  do {
    newArray.push('I love the Beatles!');
    num++;
  } while
  (num < 15);
  return newArray;
}