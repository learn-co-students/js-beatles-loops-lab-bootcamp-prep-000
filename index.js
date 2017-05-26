var beetlesMusicians = ["John Lennon","Paul McCartney","George Harrison","Ringo Star"];
var beetlesInstruments = ["Guitar","Bass Guitar","Lead Guitar","Drums"];
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var i;
  for(i = 0; i < musicians.length; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
theBeatlesPlay(beetlesMusicians,beetlesInstruments);


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
 var johnFacts = [];
  let i = 0;
  while (i < facts.length) {
    johnFacts.push(`${facts[i]}!!!`)
    i++
 }
  return johnFacts
}
johnLennonFacts(facts);


function iLoveTheBeatles(number) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!")
    number++
  }
  while
    (number < 15)
  return beatles
}
iLoveTheBeatles(12)
