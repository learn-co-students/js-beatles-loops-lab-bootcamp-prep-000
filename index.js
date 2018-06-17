function theBeatlesPlay(musicians, instruments) {
  var sentence = []
  for (var i = 0; i < musicians.length ; i++) {
    sentence.push(musicians[i] + " plays " + instruments[i]);
  }
  return sentence
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
var sentences = []
var i=0
while (i < facts.length) {
  sentences.push(facts[i] + "!!!");
  i++
}
return sentences
}

function iLoveTheBeatles(i) {
  var beat = [];
    do {
        beat.push("I love the Beatles!");
        i++;
    } while (i < 15);
    return beat;
}
