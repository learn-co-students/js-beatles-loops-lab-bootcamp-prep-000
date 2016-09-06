function theBeatlesPlay(musicians, instruments) {
  var play = [];
  for (var i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return play;
}

function johnLennonFacts(array) {
  var newFacts = [];

  var i = 0;
  while (i < array.length) {
    newFacts.push(`${array[i++]}!!!`);
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++
  } while (n < 15);
  return arr;
}
