

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (let i=0; i<musicians.length; i++) {
      newArray.push(musicians[i] + " plays " + instruments[i]);
  } return newArray;
}

function johnLennonFacts(facts) {
  var newArray = [];
  for (let i=0; i<facts.length; i++) {
	newArray.push(facts[i] + "!!!");
} return newArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return newArray;
}
