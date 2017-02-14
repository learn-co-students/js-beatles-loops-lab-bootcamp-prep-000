var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for (var i = 0; i < musicians.length;  i++ ){
      var beattlesIns = musicians[i] + " plays " + instruments[i];
      empty.push(beattlesIns);
     }
  return empty
}

function johnLennonFacts(facts){

       var beatlesFacts = [];
       var i = 0;
    while (i<facts.length){
          beatlesFacts.push(facts[i]+ "!!!");
             i++;
    }
 return beatlesFacts
}

function iLoveTheBeatles(num){
  var myBeatles = []
   do {
   myBeatles.push("I love the Beatles!")
    num ++;
   } while (num <15);
   return myBeatles
 }
