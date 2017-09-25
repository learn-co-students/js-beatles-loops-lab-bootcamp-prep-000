function theBeatlesPlay(arrayMusicians,arrayInstruments){
    var emptyArray = [];

    for (var i = 0; i < arrayMusicians.length; i++) {
      emptyArray.push(arrayMusicians[i] + " plays " + arrayInstruments[i]);
    }

    return emptyArray;
}

// const facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];

function johnLennonFacts(arrayFacts){
  var counter = 0;
  var array = [];
    while (counter < arrayFacts.length) {
      array.push(arrayFacts[counter] + "!!!");
      counter++;
    }

  return array;
}

function iLoveTheBeatles(number){
    var emptyArray = [];
    do {
      emptyArray.push("I love the Beatles!");
      number++;
    } while (number < 15);

    return emptyArray;
}
