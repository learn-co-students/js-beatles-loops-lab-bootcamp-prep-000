
  
  const musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
  ];
  const instruments = [
    "Guitar", 
    "Bass Guitar",
    "Lead Guitar",
    "Drums"
  ];
var mus = []; 

function theBeatlesPlay(musicians, instruments) { // passed
  for (let x = 0; x < musicians.length; x++) { 
    
    mus.push(musicians[x] + " plays "+ instruments[x]);
  }
  return mus;
}
// ----------------------------------------------------------------

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  

var b = [];
function johnLennonFacts(facts) {  // passed
  b = facts.slice();
  var i = 0;
  
  while (i < b.length) {
    b[i] = b[i] + "!!!";
    ++i;
  }
  return b;
}



function iLoveTheBeatles(number) {
  var arr4 = [];
  do { arr4.push("I love the Beatles!");
    ++number;
  } while (number < 15) {
    }
  return arr4;
}



