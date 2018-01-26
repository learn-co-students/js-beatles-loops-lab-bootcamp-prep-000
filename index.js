function theBeatlesPlay(musician, instrument) {
  var array = [];
  for (var i = 0; i < musician.length; i++) {
    array.push(musician[i] + " plays " + instrument[i]);
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while(i < facts.length) {
    array.push(facts[i]+"!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
return array;
}