function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var newArray = [];

  for (let i = 0; i < musiciansArray.length; i++) {
    newArray.push(musiciansArray[i] + " plays " + instrumentsArray[i])
  }
  return newArray;
}

function johnLennonFacts(factsArray) {
  var i = 0;
  while ( i < factsArray.length) {
    factsArray[i] = factsArray[i] + "!!!";
    i += 1;
  }
  return factsArray;
}

function iLoveTheBeatles(n) {
  var newArray = [];

  do {
    newArray.push("I love the Beatles!");
    n++;
  }  while (n < 15 );

  return newArray;
}
