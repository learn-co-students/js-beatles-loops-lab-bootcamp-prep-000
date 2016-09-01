function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  musicians.forEach(function(musician, index) {
    arr.push(musician + ' plays ' + instruments[index]);
  });
  return arr;
}

function johnLennonFacts(facts) {
  return facts.map(function(fact) {
    return fact+= '!!!';
  });
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
}
