// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (let i=0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
};

function johnLennonFacts(factsArray) {
  var excitedArray = [];
  var i = 0;
  i++;
  while(i < factsArray.length) {
    excitedArray.push(factsArray[i] + "!!!");
  }
  return excitedArray
};
