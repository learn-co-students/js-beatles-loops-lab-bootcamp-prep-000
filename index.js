const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  } return array;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  ];
  
  function johnLennonFacts(facts) {
  var newArray = [];
  var n = 0;
  while (n < facts.length) {
    newArray.push(facts[n] + "!!!"); n++;
  } return newArray;
}

function iLoveTheBeatles (num) {
  var chant = [];
  do {chant.push("I love the Beatles!"); num++;
    } while (num < 15);
return chant
}