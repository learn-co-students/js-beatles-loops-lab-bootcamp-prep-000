var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) 
{var newArray = [];
  for(var i=0; i < musicians.length; i++) 
  {newArray.push(musicians[i] + " plays " + instruments[i]);}
  return newArray;}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
function johnLennonFacts(king) 
{var i = 0; var facts = [];
while (i < king.length) {facts.push(king[i] + '!!!');i++; } 
return facts; }

function iLoveTheBeatles(num) {var sunshine = []; 
do {sunshine.push("I love the Beatles!");num++; }
while (num < 15);
return sunshine;}
