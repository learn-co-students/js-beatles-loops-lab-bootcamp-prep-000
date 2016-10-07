const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var playArray = [];
  for (var i = 0; i < musicians.length; i++) {
      playArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return playArray;
}

function johnLennonFacts(facts){
   var newFacts = [];
   var i = 0
   while (i < facts.length) {
     newFacts.push(`${facts[i]}!!!`)
     i++;
   }
   return newFacts;
 }

 function iLoveTheBeatles(num) {
   var phrases = [];
   do {
     phrases.push("I love the Beatles!");
     num++;
   } while (num < 15);
   return phrases;
 } 
