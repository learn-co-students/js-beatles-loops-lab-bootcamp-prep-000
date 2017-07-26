function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];

for (let i = 0; i < musicians.length; i++) {
  emptyArray[i] = (musicians[i] + " plays " + instruments[i])
}
return emptyArray

}

function johnLennonFacts(facts) {
  var i = 0;

  while (facts[i]) {
    facts[i] = facts[i] + '!!!'
    i++;
  }
  return facts
};

function iLoveTheBeatles(n) {
var emptyArray = [];
do {
  emptyArray.push('I love the Beatles!')
  n++;
} while (n < 15)
return emptyArray
}
