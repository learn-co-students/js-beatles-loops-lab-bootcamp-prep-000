var players = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay (players, instruments) {
  var together = []
  for (var i = 0; i < players.length; i++) {
    var sentence = `${players[i]} plays ${instruments[i]}`;
    together.push(sentence);
  }
  return together ;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  var i = 0;
  var newArray =[]
  while (i < facts.length) {
    var sentence = ( facts[i] + '!!!');
newArray.push(sentence)
   i++;
  } return newArray;
}


function iLoveTheBeatles(statement) {
  const newArray =[];
  do {
    newArray.push("I love the Beatles!");
    statement++;
  } while ( statement < 15);
   return newArray;
}
