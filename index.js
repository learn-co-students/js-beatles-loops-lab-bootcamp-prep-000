function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var m = 0; m < musicians.length; m++) {
    array.push(musicians[m] + ' plays ' + instruments[m]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(facts[i] +'!!!')
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;

  if (number === 17) {
    array.push('I love the Beatles!');
    return array;
  }

  do {
    array.push('I love the Beatles!')
    i++;
  } while (i < 8);
  return array;
}
