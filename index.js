// IT'S WORKKKINNNNGGGG!
var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];

var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length && i < instruments.length; i++ ) {
     newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  } return newArray
}

// is gut
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (i < facts.length) {
   newFacts[i] = facts[i] + '!!!';
   i++
  }
  return newFacts
}

//third one pls play nice 

var n = 7;
function iLoveTheBeatles (n) {
  var myArray = [];
  do {
    myArray.push('I love the Beatles!')
    n++
  } while (n < 15)
  return myArray
}











