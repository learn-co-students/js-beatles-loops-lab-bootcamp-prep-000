// add solution here
function theBeatlesPlay(musicians,instruments) {
  var newArray = [];
  for (let i = 0; i < 4; i++) {
    newArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var newerArray = [];
  var i = 0;
  while (i < facts.length) {
    newerArray.push(facts[i] + '!!!');
    i++;
  }
  return newerArray;
}

function iLoveTheBeatles(n) {
  var newestArray = [];
  do {
    newestArray.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return newestArray;
}
