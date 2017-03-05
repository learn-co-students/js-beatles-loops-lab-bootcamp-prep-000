function theBeatlesPlay(arrayArtist, arrayInstrmnts){
  var array = [];
  for (var i = 0; i < arrayArtist.length; i++) {
    array.push(`${arrayArtist[i]} plays ${arrayInstrmnts[i]}`);
  }
  return array;
}
function johnLennonFacts(arrayFacts) {
  var array = [];
  var i = 0;
  while (array.length < arrayFacts.length) {
    array[i] = `${arrayFacts[i]}!!!`;
    i++;
  }
  return array;
}
function iLoveTheBeatles(number) {
  var array = [];
  do {
    number++;
    array.push(`I love the Beatles!`);
  } while (number < 15);
  return array;
}