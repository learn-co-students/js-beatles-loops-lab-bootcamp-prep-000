function theBeatlesPlay(musicianArray, instrumentArray) {
  var sentences = [];

  for (var i = 0; i < musicianArray.length; i++) {
    let sentence = `${musicianArray[i]} plays ${instrumentArray[i]}`;
    sentences.push(sentence);
  }

  return sentences;
}

function johnLennonFacts(factsArray) {
  var i = 0;
  var newFactsArray = [];

  while (i < factsArray.length) {
    newFactsArray.push(factsArray[i] + '!!!');
    i++;
  }

  return newFactsArray;
}

function iLoveTheBeatles(num) {
  var howMuchDoYouLoveThem = [];

  do {
    howMuchDoYouLoveThem.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return howMuchDoYouLoveThem;
}
