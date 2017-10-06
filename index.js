function theBeatlesPlay(musicians, instruments) {
  var output = [];
  for (var i= 0; i < musicians.length; i++) {
    output.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return output;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}
function iLoveTheBeatles(num) {
  var output = [];
  do {
    num++;
    output.push("I love the Beatles!");
  }
  while (num < 15);
  return output;
}
