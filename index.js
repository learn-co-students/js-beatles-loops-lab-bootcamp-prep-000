// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for (let i = 0; i < musicians.length ; i++) {
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i]);
  }
  return whoPlaysWhat;
}

function johnLennonFacts(arrayFacts) {
  let i = 0
  var newArrayFacts = []
  while (i < arrayFacts.length) {
    newArrayFacts.push(arrayFacts[i] + "!!!");
    i++;
  }
  return newArrayFacts;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return newArray;
}