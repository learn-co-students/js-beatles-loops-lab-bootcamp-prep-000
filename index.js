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

  while(i < factsArray.length) {
    excitedArray.push(factsArray[i] + "!!!");
    i++;
  }
  return excitedArray
};

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
} while (num < 15)
  return array
}
