function theBeatlesPlay(musicians, instruments) {
  var tempArray = [];
  for(var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    tempArray.push(`${musician} plays ${instrument}`);
  }
  return tempArray;
}

function johnLennonFacts(facts) {
  for(var i = 0; i < facts.length; i++) {
    var message = facts[i] + "!!!";
    facts[i] = message;
  }
  return facts;
}
function iLoveTheBeatles(number) {
  var tempArray = [];
  do {
    tempArray.push("I love the Beatles!");
  } while(++number < 15)
  return tempArray;
}

var arrayOne = ["John Lennon is amazing"];

johnLennonFacts(arrayOne);
