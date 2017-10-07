function theBeatlesPlay(musicians, instruments){
  var result = [];

  for (var i = 0; i < musicians.length; i++) {
    result[i] = musicians[i] + " plays " + instruments[i];
  }

  return result;
}

function johnLennonFacts(facts){
  var result = [];
  var counter = 0;
  while (counter < facts.length) {
    result[counter] = facts[counter] + "!!!";
    counter++;
  }
  return result;
}

function iLoveTheBeatles(number){
  var result = [];

  do {
    result.push("I love the Beatles!");
  } while (++number < 15);

  return result;
}
