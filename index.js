// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments  = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, intruments) {
  var combinations = []

  for (let i = 0; i < musicians.length; i++) {
    combinations.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return combinations
}

var facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

function johnLennonFacts(facts) {
  var newfacts = [];
  var i = 0;
  while (i < facts.length) {
    newfacts[i] = facts[i] + '!!!';
    i++;
  }
    return newfacts;
}

var num = 0
function iLoveTheBeatles(num) {
  var array = [];
do {
    array.push("I love the Beatles!")
    num++
  } while(num < 15);
  return array;
}
