
function johnLennonFacts(facts) {
  var i = 0;
  while (facts[i]){
    facts[i] = facts[i] +"!!!";
    i += 1;
  }
  return facts;
}



function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = [];
  var i;
  for (i = 0 ; i < musicians.length; i += 1) {
    beatlesPlay.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesPlay;
};

function iLoveTheBeatles(n) {
  var number = [];
  do {
    number.unshift('I love the Beatles!');
    n += 1;
  } while (n < 15)
  return number;
}
