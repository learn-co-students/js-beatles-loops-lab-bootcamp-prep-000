function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < instruments.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
    }
    return array
}

function johnLennonFacts(facts) {
  var sentence = [];
  var i = 0;
 
  while (i < facts.length) {
  sentence.push(facts[i] + "!!!");
  i++;
  }
return sentence;
}



function iLoveTheBeatles(num) {
  var empty = []
  do {
    empty.push('I love the Beatles!')
    num++;
  }
  while (num < 15)
  
  return empty
}