function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var emptyArray = [];
  
  for (var i = 0; i < arrayOfMusicians.length; i ++ ) {
    emptyArray.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`);
  }
  return emptyArray;
}

function johnLennonFacts(arrayOfFacts) {
  var emptyArray = [];
  let i = 0;
  while (i < arrayOfFacts.length) {
    emptyArray.push(`${arrayOfFacts[i]}!!!`);
    i++;
    }
    return emptyArray;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
    emptyArray.push('I love the Beatles!');
    number ++;
  } while (number < 15);
  return emptyArray
}