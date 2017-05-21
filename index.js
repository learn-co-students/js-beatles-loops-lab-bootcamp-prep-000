//1
function theBeatlesPlay(musicians,instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    newArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return newArray;
}

//2
function johnLennonFacts(facts) {
var i = 0;
var newArrayofFacts = [];
  while (i < facts.length) {
    newArrayofFacts[i] = facts[i] + "!!!";
    i++;
  }
  return newArrayofFacts;
}

//3
function iLoveTheBeatles(number) {
  var beatleLove = [];
  var i = 0;
  do {
    beatleLove[i] = "I love the Beatles!";
    number++;
    i++;
  } while(number < 15);
  return beatleLove;
}

//4
