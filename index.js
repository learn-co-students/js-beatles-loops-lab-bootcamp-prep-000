function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var arr = [], i = 0;
   while (i < facts.length) {
    arr.push(facts[i] + "!!!")
    i++
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var phrases = [];
  do {
    phrases.push("I love the Beatles!");
    num++
  } while (num < 15);
  return phrases;
} 