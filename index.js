function theBeatlesPlay (musicians, instruments){
  var newBeatlesArr = [];
  for (var i = 0; i < musicians.length; i++) {
  newBeatlesArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newBeatlesArr;
}


function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++
  }
  return newFacts;
}

function iLoveTheBeatles(num){
  var newBeatlesArray = [];
      do {
      newBeatlesArray.push("I love the Beatles!");
      num++
  } while (num < 15);
  return newBeatlesArray;
   }
