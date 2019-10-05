// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["guitar", "bass", "guitar", "drums"];
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}


function johnLennonFacts (facts) {
  var exclamationFacts = [];
  let i = 0;
  while(i<facts.length){
    exclamationFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return exclamationFacts;
}

function iLoveTheBeatles (number) {
 var emptyArray = [];
  
do {
  emptyArray.push("I love the Beatles!"); number++;
} while (number < 15);

return emptyArray
}