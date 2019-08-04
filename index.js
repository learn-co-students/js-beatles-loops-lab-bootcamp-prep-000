var sentences = [];

function theBeatlesPlay(arrayMusicians, arrayInstruments) {

  for (var i = 0; i <arrayMusicians.length; i++) {

    sentences.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);

  }

  return sentences;

}

function johnLennonFacts(arrayFacts) {

  var i = 0;

  while (i < arrayFacts.length) {

    arrayFacts[i] = `${arrayFacts[i]}!!!`;
    i++;

  }

  return arrayFacts;

}

function iLoveTheBeatles(number) {

  var sentence = [];

  do {

    sentence.push("I love the Beatles!");
    number++;

  } while (number < 15);

  return sentence;

}
