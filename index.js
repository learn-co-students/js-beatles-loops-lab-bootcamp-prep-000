function theBeatlesPlay(musicians, instruments) {
  var arrayTemp = [];
  for (var i = 0; i < musicians.length; i++) {
    arrayTemp.push(musicians[i] + " plays " + instruments[i]);
  }
  return(arrayTemp);
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return(facts);
}

function iLoveTheBeatles(number) {
  var arrayTemp = [];
  do {
    arrayTemp.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return(arrayTemp);
}
