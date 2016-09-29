function theBeatlesPlay(musiciansArray, instrumentsArray) {
var newArray = [];
for (var i = 0 ; i < musiciansArray.length; i++) {
  newArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
}
return newArray;
}

function johnLennonFacts(factsArray) {
  let counter = 0;
  while (counter < factsArray.length) {
factsArray[counter] = `${factsArray[counter]}!!!`;
counter++;
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return array;
}
