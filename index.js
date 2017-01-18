function theBeatlesPlay(musicians, instrument) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    var sentence = musicians[i] + " plays " + instrument[i];
    empty.push(sentence)
  }
  return empty;
}
function johnLennonFacts(facts) {
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
var i = 0;
var exclamations = [];
while (i < facts.length) {
  exclamations.push(facts[i] +"!!!");
  i++;
}
return exclamations;
}

function iLoveTheBeatles(num) {
  var beatleMania = [];
  do {
    beatleMania.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return beatleMania;
}
