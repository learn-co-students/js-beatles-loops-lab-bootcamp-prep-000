
var musican = ['John Lennon', 'Ringo Starr', 'George Harrison', 'Paul Mccartney']
var instrument = ['Guitar', 'Drums', 'Lead Guitar', 'Bass Guitar']
function theBeatlesPlay(array) {
  for (let i= 1; i <4; i++ ) {
    array.push(`${musican} plays ${instrument}`)
  }
  return theBeatlesPlay
}

function johnLennonFacts(array) {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  while (array) {
    facts.push(`${facts} '!!!`)
  }
  return johnLennonFacts
}
  

function iLoveTheBeatles(num) {
 
  var i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I love the Beatles!");
  }
  while (incrementVariable() < num);
}
  