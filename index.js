function theBeatlesPlay(musicians, instruments){
  var yellowSubmarine = [];
  for(var i = 0; i < musicians.length; i++) {
      yellowSubmarine.push(musicians[i] + " plays " + instruments[i]);
  }
  return yellowSubmarine
  }

function johnLennonFacts(facts) {

  var count = 0
  var updatedFacts = []

  while(count < facts.length) {
    updatedFacts.push(facts[count] + "!!!");
    count+=1;
}
  return updatedFacts
}

function iLoveTheBeatles(number) {

  var updatedArray = []
  var num = 0

  do {
    updatedArray.push("I love the Beatles!");
    number++;
  } while(number < 15);

  return updatedArray
}
