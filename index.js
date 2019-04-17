// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians,instruments){
  var empty = [];
     for (var i = 0; i < musicians.length; i++) {
      empty.push(musicians[i] + " plays " + instruments[i]);
   
  }
  return empty;
}

function johnLennonFacts(facts) {
    var count = 0;
    while (count < facts.length) {
        newFacts.push(facts[i] +"!!!");
        count++;
    }
    return newFacts;
}

