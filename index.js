function theBeatlesPlay (musicians, instruments) {
  var emptyArray = [];
  
  for (var i = 0; i < musicians.length && instruments.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return emptyArray;
}

function johnLennonFacts (facts) {
  
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles (number) {
  var emptyArray2 = [];
  
  do {
    emptyArray2.push("I love the Beatles!");
    number++
  } while (number < 15)
  
  return emptyArray2;
}
