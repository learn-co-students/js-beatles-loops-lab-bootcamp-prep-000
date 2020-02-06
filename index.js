var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = ['guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musicians,instruments) {
var musiciansString;
 var empty = [];
  for (var i = 0; i < 4; i++) {
 musiciansString = musicians[i] +' plays '+ instruments[i];
 empty[i] = musiciansString;}
  return empty;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  var i = 0;
  var newFacts =[];
 while (i < facts.length) {
   newFacts.push(`${facts[i]}` + "!!!");
   i++;}
   return newFacts;
}

function iLoveTheBeatles(num) {
 var i = 0;
  var empty2 = [];
  do {num++;
    empty2.push("I love the Beatles!");}
  while(num < 15);
  return empty2;
}

