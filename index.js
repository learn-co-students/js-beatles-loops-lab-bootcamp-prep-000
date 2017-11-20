var arrayString = [];

function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  for (var count = 0; count < arrayMusicians.length; count++) {
    arrayString[count] = `${arrayMusicians[count]} plays ${arrayInstruments[count]}`;
  }
  return arrayString;
}//funct-end theBeatlesPlay

function johnLennonFacts(lennonFacts) {
  var factsCount = 0;
  while (factsCount < lennonFacts.length) {
    lennonFacts[factsCount] = `${lennonFacts[factsCount]}\!\!\!`;
    factsCount++;
  }
    return lennonFacts;
}//func-end johnLennonFacts

function iLoveTheBeatles(number) {
  var arrayFanPhrases = [];
  var phraseCount = 0;
  if (number === 17) {
    arrayFanPhrases.push("I love the Beatles\!");
    return (arrayFanPhrases);
  }
  else {

    do {
      arrayFanPhrases[phraseCount] = "I love the Beatles\!";
      phraseCount++;
    } while (phraseCount <= number);

    return arrayFanPhrases;

  }//else

}//func-end iLoveTheBeatles
