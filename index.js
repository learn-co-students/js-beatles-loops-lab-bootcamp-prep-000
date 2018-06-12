function theBeatlesPlay (arrayMusicians, arrayInstruments) {
  var newArray = [];
  for (var i = 0; i < arrayMusicians.length; i++) {
    newArray.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts (facts) {
  var newFacts = [];
  let i = 0;
  while (i < facts.length) {
  newFacts.push(`${facts[i]}!!!`)
  i++;
  }
  return newFacts;
}

function iLoveTheBeatles (number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++
  } while (number < 15);
  return newArray;
}





