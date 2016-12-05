
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var l = musicians.length;
  for (var i = 0; i < l; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return array
}

function johnLennonFacts(facts) {
  var l = facts.length;
  var i = 0;
  while (l > 0) {
    facts[i] = facts[i] + '!!!';
    i++;
    l--;
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  do {
    array[i] = "I love the Beatles!";
    number++;
    i++;
  } while (number < 15);
  return array
}
