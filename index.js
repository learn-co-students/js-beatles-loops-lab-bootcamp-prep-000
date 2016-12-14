function theBeatlesPlay(musicians, instruments) {
  var artistLineup = [];
  for (var i = 0; i < musicians.length; i++) {
    artistLineup.push(musicians[i] + " plays " + instruments[i])
  }
  return artistLineup;
}

function johnLennonFacts(array) {
  var i = 0;
  var stringsAry = [];
  while (i < array.length) {
    stringsAry.push(array[i] + "!!!");
    i++;
  }

  return stringsAry;
}

function iLoveTheBeatles(number) {
  var beatlesLove = [];
  var i = number;

  do {
    i++;
    beatlesLove.push("I love the Beatles!");
  } while (i < 15);

  return beatlesLove;
}
