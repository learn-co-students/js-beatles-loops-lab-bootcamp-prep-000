function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (let i=0; i<=musicians.length-1; i++){
    strings.push(musicians[i] + " plays " + instruments[i]);
  };
  return strings;
}

function johnLennonFacts(facts) {
  var two = [];
  var n = 0;
  while (n<facts.length) {
    two.push(facts[n] +"!!!");
    n++
  }
  return two;
}

function iLoveTheBeatles(number) {
  var three = [];
  do {
    three.push("I love the Beatles!")
    number++
} while(number<15)
return three;
}
