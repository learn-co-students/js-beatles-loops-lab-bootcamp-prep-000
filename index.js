function theBeatlesPlay(musiciansArray, instrumentsArray) {
var newArray = [];
for (var i = 0 ; i < musiciansArray.length; i++) {
  newArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
}
return newArray;
}

function johnLennonFacts(factsArray) {
var factsArrayLength = factsArray.length;
  while (factsArrayLength > 0) {
factsArray[factsArrayLength] = `${factsArray[factsArrayLength]}!!!`;
factsArrayLength--;
  }
  return factsArray;
}
