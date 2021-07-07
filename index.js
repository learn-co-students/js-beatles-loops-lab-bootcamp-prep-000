function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (let i = [0]; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array3 = [];
  do {
    array3.unshift('I love the Beatles!');
    n++;
  } while(n < 15);
  return array3;
}




