const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments){
  var sentence = [];
  for (var i = 0; i < musicians.length; i++){
      sentence.push(musicians[i] + " plays " + instruments[i]);
  }
  return sentence
}

function johnLennonFacts(facts){
  var sentence = [];
  var i = 0
  while (i < facts.length) {
    sentence.push(facts[i] + "!!!")
    i++
  }
  return sentence
}

function iLoveTheBeatles(n){
  var sentence = [];
  do {
    sentence.push("I love the Beatles!")
    n++
  } while (n < 15)
  return sentence
}
