function theBeatlesPlay(musicians, instruments) {
  var i = 0;
  var strings = [];
  while(i < musicians.length) {
    strings.push(musicians[i] + " plays " + instruments[i]);
    i++;
  }
  return strings;
}
function johnLennonFacts(facts) {
  var tmp = [];
  var i = 0;
  
  while( i < facts.length) {
    tmp.push(facts[i] + "!!!");
    i++;
  }
  return tmp;
}
function iLoveTheBeatles(number) {
  var tmp = [];
  
  do {
    tmp.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return tmp;
}