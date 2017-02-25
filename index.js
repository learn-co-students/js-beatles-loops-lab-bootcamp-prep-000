function theBeatlesPlay(musicians, instruments) {
  const myArray = [];
  for(var i = 0; i < musicians.length; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray;
}

var musicians = ["John Lennon", "Ringo Starr", "George Harrison", "Paul McCartney"];
var instruments = ["guitar", "drums", "leadGuitar", "bass"];
theBeatlesPlay(musicians, instruments);

function johnLennonFacts(aboutJohn) {
  var newJohn = [];
  var i = 0;
  while(i < aboutJohn.length) {
    newJohn.push(aboutJohn[i] + "!!!")
    i++;
  }
  return newJohn;
}

const aboutJohn = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
johnLennonFacts(aboutJohn);

function iLoveTheBeatles(num) {
  var beatlesLove = [];
  do  {
    beatlesLove.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return beatlesLove;
}
iLoveTheBeatles(num);
var num = 0;
