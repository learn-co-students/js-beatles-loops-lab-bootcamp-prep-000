function theBeatlesPlay(musicians, instruments) {
  var bandList = [];
  for (var i = 0; i < musicians.length; i++) {
    bandList.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return bandList;
}

function johnLennonFacts(facts) {
  var i = 0
  var johnLennon = [];
  while (i < facts.length) {
    johnLennon.push(facts[i] + "!!!");
    i++;

  }
  return johnLennon;
}

function iLoveTheBeatles(number) {
  var beatlesLove = [];
  do {
    beatlesLove.push('I love the Beatles!');
    number++
  } while (number < 15)
  return beatlesLove;
}
