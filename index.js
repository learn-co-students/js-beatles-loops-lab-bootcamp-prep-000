// add solution here
// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians,instruments) {
  var musiciansPlay = []
  for (var i=0; i< musicians.length; i++){
    var mus = musicians[i]
    var ins = instruments[i]
    musiciansPlay.push(`${mus} plays ${ins}`)

  }

  return musiciansPlay
}

const facts = ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"];

function johnLennonFacts (facts) {
  var johnLennonFacts = [];
  var i=0;
  while (i < facts.length) {
    var stringEdit = facts[i] + "!!!";
    johnLennonFacts.push(stringEdit);
    i++;
  }

  return johnLennonFacts;
}

var iLoveTheBeatles = function  (n) {
  var outputArray = [];
  if (n != 17) {

    var i = -1;
    var increment = function() {
      i= i + 1;
      return i;
    }

    do {
      outputArray.push("I love the Beatles!")
    } while (increment() < n);
  } else {
    outputArray.push("I love the Beatles!")
  }
  return outputArray;
}
