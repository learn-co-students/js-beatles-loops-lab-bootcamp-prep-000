// add solution here
function theBeatlesPlay(musicians, instruments) {
  var pair = new Array();
  for (var i = 0; i < musicians.length; i++) {
    pair.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return pair;
}

function johnLennonFacts(facts) {
  var excitedFacts = new Array();
  var i = 0
  while (i<facts.length) {
    excitedFacts.push(facts[i] + '!!!');
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(number) {
  var obsessed = new Array();
  do {
    obsessed.push('I love the Beatles!');
    number++
  } while (number < 15);
  return obsessed;
}
