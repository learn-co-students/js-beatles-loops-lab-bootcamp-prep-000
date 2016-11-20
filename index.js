function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var newArray = [];
  for (let i = 0; i < 4; i++) {
    newArray.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(arrayOfFacts) {
  let i = 0;
  while (i < arrayOfFacts.length) {
    arrayOfFacts[i] += '!!!';
    i++;
  }
  return arrayOfFacts;
}

function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return array;
}
