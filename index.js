function theBeatlesPlay(musicianArray, instrumentArray) {
  var beatlesArray = [];
  for (var i = 0; i < musicianArray.length; i++) {
    beatlesArray.push(musicianArray[i] + " plays " + instrumentArray[i]);
  }
  return beatlesArray;
}

function johnLennonFacts(factsArray) {
  var i = 0;
  while (i < factsArray.length) {
    factsArray[i] = factsArray[i] + "!!!";
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  do {
  newArray.push("I love the Beatles!");
  num++;
  }
  while (num < 15);
  return newArray;
}