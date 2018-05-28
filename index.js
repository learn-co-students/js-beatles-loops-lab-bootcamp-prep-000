const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]; 

function theBeatlesPlay(musicians, instruments) {
  let array = [ ]
  for (var i=0; i < 4; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
  var newFacts = [ ];
  var x = 0;
  while (x < facts.length) {
    newFacts.push(facts[x] + "!!!");
    x++;
  }
  return newFacts
} 


function iLoveTheBeatles(n) {
  var quote = [ ];
  do {
    quote.push("I love the Beatles!");
    n++;
  } while (n < 15) 
  return quote
}
