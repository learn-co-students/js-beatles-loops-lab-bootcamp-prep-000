// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

// "function(a, b)" 
// function {body} = 
// - create "array" stored in a "variable"
// - each array entry = "string" = `${musicians} + plays + ${instruments}`
// "return" array 

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < 4; i += 1 ) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray;
}

// "function(facts)" 
// "while" loop to add "!!!" to end of each fact
// return a "new array" with the !!!facts

function johnLennonFacts(facts) {
  var newArray = [];
  var i = 0;
  while (i < facts.length) {
    newArray.push(facts[i]+"!!!");
    i += 1;
  }
  return newArray
}