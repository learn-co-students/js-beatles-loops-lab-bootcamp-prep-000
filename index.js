function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
 	beatlesArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesArray;
}

function johnLennonFacts(facts) {
  var johnFacts = [];
  var i = 0; 
  while (i < facts.length) {
  johnFacts.push(facts[i] + "!!!")
	i++;
  }
  return johnFacts;
}

function iLoveTheBeatles(number) {
  var beatlesLovers = [];
  do {
    beatlesLovers.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return beatlesLovers;
}