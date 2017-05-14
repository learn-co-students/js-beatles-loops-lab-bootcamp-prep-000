function theBeatlesPlay(musArray,instArray){
var playArray = [];
var numMus = musArray.length - 1;
for (var i = 0; i <= numMus ; i++){
  playArray.push(musArray[i] + ' plays ' + instArray[i]);
}
  return playArray
}

function johnLennonFacts(facts) {
var numFacts = facts.length - 1;
  while (numFacts >= 0) {
facts[numFacts] = facts[numFacts] + "!!!";
numFacts = numFacts - 1
  }
  return facts
}

function iLoveTheBeatles(numParam) {
  var newArray =[];
  do {
newArray.push('I love the Beatles!');
numParam = numParam +1;
  }
  while (numParam < 15);
  return newArray
}
