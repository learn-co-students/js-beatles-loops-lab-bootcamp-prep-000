function theBeatlesPlay (musicianArray, instrumentArray) {
  var musicianInstrumentPair = [];
  for (let i = 0; i < musicianArray.length; i++) {
    musicianInstrumentPair.push(`${musicianArray[i]} plays ${instrumentArray[i]}`);
  }
  return musicianInstrumentPair;
}

function johnLennonFacts (factsArray) {
  let factsCountdown = 0;
  while (factsCountdown < factsArray.length) {
    factsArray[factsCountdown] = factsArray[factsCountdown] + "!!!";
    factsCountdown++;
  }
  return factsArray;
}

function iLoveTheBeatles (number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return newArray;
}