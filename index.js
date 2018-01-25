function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var beatles = []
  for (var i=0; i<arrayMusicians.length; i++) {
    var string = (`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
    beatles.push(string)
  }
  return beatles
}

function johnLennonFacts(arrayFacts) {
  var loudFacts = [];
  var i=0
  while (i<arrayFacts.length) {
    loudFacts.push(arrayFacts[i] + "!!!");
    i++;
  }
  return loudFacts;
}

function iLoveTheBeatles(number) {
  var loveBeatles = [];
  do {
    loveBeatles.push("I love the Beatles!");
    number++;
  } while(number<15)
  return loveBeatles;
}

