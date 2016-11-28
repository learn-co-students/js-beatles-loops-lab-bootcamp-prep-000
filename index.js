var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];


function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    for (var j = 0; j < instruments.length; j++) {
      if (i === j) {
        newArray.push(musicians[i] + " plays " + instruments[j]);
      }
    }
  }
  return newArray;
};

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(johnLennonFacts) {
  var LennonArray = [];
  var x = 0;
  while (x < johnLennonFacts.length) {
    LennonArray.push(johnLennonFacts[x] + "!!!");
    x++;
  }
  return LennonArray;
};

function iLoveTheBeatles(x) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    x++;
  } while(x < 15);
  return newArray;
};
