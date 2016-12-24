function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array;
}
function johnLennonFacts(facts) {
  var index = 0;
  while (index < facts.length) {
    facts[index] = facts[index] + "!!!";
    index++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  var index = 0;
  do {
    array[index] = "I love the Beatles!";
    number++;
    index++;
  } while (number < 15);
  return array;
}
