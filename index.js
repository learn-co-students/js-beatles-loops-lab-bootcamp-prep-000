var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
var aboutBeatles = []
for (var i = 0; i < 4; i++) {
aboutBeatles.push(musicians[i] + " plays " + instruments[i])
}
return aboutBeatles
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout","He hated the sound of his own voice"];

function johnLennonFacts(facts) {
var newFact = [];
var i = 0;
while(i < facts.length) {
newFact.push(facts[i] + "!!!");
i++;
}
return newFact;
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
   love.push("I love the Beatles!")
    number++;
  }
    while (number < 15);
    return love
  }
