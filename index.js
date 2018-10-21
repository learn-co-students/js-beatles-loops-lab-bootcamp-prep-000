// add solution here
function theBeatlesPlay(mus,ins) {
  var array = [];
  for (var i = 0; i < mus.length; i++)
  {
    var str = `${mus[i]} plays ${ins[i]}`;
    array[i] = str;
  }
  return array;
}

function johnLennonFacts(facts) {
  var j = 0;
  while(j < facts.length) {
    facts[j] = facts[j].concat('!!!');
    j++
  }
  return facts;
}

function iLoveTheBeatles(y) {
  var empty = [];
  do {
    empty.push('I love the Beatles!');
    y++;
  } while (y < 15);
  return empty;
}