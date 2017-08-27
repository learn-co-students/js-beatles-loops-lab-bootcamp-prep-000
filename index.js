function theBeatlesPlay(musicians, instruments) {
  var sentences = [];
  var m = musicians.length;
  for (let i = 0; i < m; i++) {
    sentences[i] = musicians[i] + " plays " + instruments[i];
  }
  return sentences;
}

function johnLennonFacts(facts) {
  var n = facts.length;
  var i = 0;
  while (i < n) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = []; var i = 0;
  do {
    array[i] = "I love the Beatles!"
    number++; i++
  } while (number < 15);
  return array;
}
