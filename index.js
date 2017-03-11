
function theBeatlesPlay(musicians, instruments) {
  let out = [];

  for (var i = 0; i < musicians.length; i++) {
    out.push(musicians[i] + ' plays ' + instruments[i]);
  }

  return out;
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + '!!!';
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15)

  return arr;
}
