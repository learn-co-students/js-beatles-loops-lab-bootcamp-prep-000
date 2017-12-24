function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return newArray;
}

function johnLennonFacts(facts){
  for (let i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(n){
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15);

  return newArray;
}
