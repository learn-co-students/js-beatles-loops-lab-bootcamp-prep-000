function theBeatlesPlay(musicians, instruments) {
  var musicianPlays = [];
   for (var i = 0; i < musicians.length; i++) {
     musicianPlays.push(musicians[i] + " plays " + instruments[i]);
   }
   return musicianPlays;
 }

 function johnLennonFacts(facts){
   var newFacts = [];
   var i = 0;
   while (i < facts.length) {
     newFacts.push(facts[i] + "!!!")
     i++;
   }
  return newFacts;
  }

function iLoveTheBeatles(num) {
    var NewArray = [];
    do {
     NewArray.push("I love the Beatles!");
     num++
 } while (num < 15);
 return NewArray;
  }
