// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, intruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(array) {
  var result = [];
  var i = 0;
  while(i < array.length) {
    result.push(array[i] + "!!!");
    i++;
    }
    return result;
}

function iLoveTheBeatles(number) {
  let newArray = [];
  do {
    newArray.push(`I love the Beatles!`);
    number++;
  } while (number < 15);
  return newArray;
  }

    


