//Function to create an array of members and what they play
function theBeatlesPlay(arrayMusician, arrayInstrument) {
  var emptyArray = []

  var x;
  for (x in arrayMusician) {
    emptyArray.push(`${arrayMusician[x]} plays ${arrayInstrument[x]}`);
    x++;
  }
return emptyArray;
}

//Lennon Facts loop
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arrayFacts) {
  var i = 0;
  var text = " ";
  var exclamation = "!!!";
  var yippeeFacts = [];

  while (i < arrayFacts.length) {
    yippeeFacts[i] = arrayFacts[i] + exclamation;
    i++;
  }
  return yippeeFacts;

}

//Ehh I think the Beatles have some amazing songs... but so do lots of bands.
function iLoveTheBeatles(number) {
  var emptyArray2 = [];
  var x;

  do {
    emptyArray2.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return emptyArray2;
}
