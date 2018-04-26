function theBeatlesPlay(musicians, instruments) {
  var array = [] 
  for (let i = 0; i < musicians.length; i++){
    var sentence = musicians[i] + " plays " + instruments[i] 
    array.push(sentence) 
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  while (facts.length > 0) {
    var sentence = facts.shift() 
    sentence = sentence + '!!!'
    array.push(sentence)
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number = number + 1;
  } while (number < 15);
  return array
  
}
