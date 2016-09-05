const musicians = ['John Lennon', 'Paul McCartney', 'Ringo Starr', 'George Harrison']
const instruments = ['Guitar', 'bass Guitar', 'Lead Guitar', 'Drums']
function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (var i = 0; i < 4; i++){
    plays.push(`${musicians[i]} plays ${instruments[i]}`);
  } return plays;

}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var trueStory = []
  for (var i = 0; i < facts.length; i++) {
    trueStory.push(facts[i] + "!!!")
  } return trueStory;
}

function iLoveTheBeatles(n) {
  var array = [];
  n++;
  do {
    array.push("I love the Beatles!");
    n--;
  }
    while (n < 15 && n > 0);
    return array;
}
