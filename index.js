function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArray[i] = `${musician} plays ${instrument}`;
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(facts[i]){
    var fact = facts[i];
    facts[i] = fact + "!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = [];
  var love = "I love the Beatles!";

  do {
    
    array.unshift(love);
    n++;
  } while (n < 15);
  return array;
}