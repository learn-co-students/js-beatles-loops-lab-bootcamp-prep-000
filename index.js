// Function which builds sentences from the elements of two arrays

function theBeatlesPlay(musicians, instruments) {
  var musicianSentence;
  var musicianAndInstrumentPlayed = [];
  for (var i = 0; i < musicians.length; i++) {
    musicianSentence = musicians[i] + ' plays ' + instruments[i];
    musicianAndInstrumentPlayed[i] = musicianSentence;
  }
  return musicianAndInstrumentPlayed;
}

// Function for facts about John Lennon

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  
function johnLennonFacts(factsArray) {
  var i = 0;
  var transformedArray = [];
  while (factsArray.length > i) {
    transformedArray.push(`${factsArray[i]}` + '!!!');
    i++;
  }
  return transformedArray;
}

// Function to add string to empty array

function iLoveTheBeatles(number) {
  var a = [];
  do {
    a.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return a;
}


