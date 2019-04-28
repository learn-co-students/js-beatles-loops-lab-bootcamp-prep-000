// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = [4]
  for (var i = 0; i < 4; i++)
  newArray[i] = musicians[i].concat(" plays " + instruments[i]);
  return newArray
};


function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i].concat("!!!");
    i++;
  }
  return facts
};

function iLoveTheBeatles(num) {
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i <= num && num != 17);
  return array
};
