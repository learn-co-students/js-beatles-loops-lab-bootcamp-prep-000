function theBeatlesPlay(musicians, instruments){
  var newMusicians = [];
  for (var i=0; i < musicians.length; i++){
    newMusicians.push(musicians[i] + " plays " + instruments[i])
  }
  return newMusicians;
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var newNumber = [];
    do {
      newNumber.push("I love the Beatles!");
      number++;
    } while (number < 15);
    return newNumber;
}