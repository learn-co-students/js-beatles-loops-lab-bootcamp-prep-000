function theBeatlesPlay(musicians, instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
  phrases.push (musicians[i] + " plays " + instruments[i]);

}
  return phrases;
}

function johnLennonFacts(facts) {
  var array = [];
  let i = 0
  while (i < facts.length) {
    array.push (`${facts[i]}!!!`)
    i++;
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
  array.push("I love the Beatles!")
  number++;
} while ( number < 15);
  return array
}
