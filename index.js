function theBeatlesPlay(musicians, instruments) {
  var musicianAndInstrument = [];
  for (let i = 0; i < 4; i++) {
    musicianAndInstrument.push(musicians[i] + ' plays ' + instruments[i]);
  }
return musicianAndInstrument;
}

function johnLennonFacts(array) {
  var factsArray = [];
  var i = 0;
  while (i < array.length) {
    factsArray.push(array[i] + '!!!'); i++;
  }
  return factsArray;
}

function iLoveTheBeatles(n){
  var loveBeatlesArray = [];
  do {
  loveBeatlesArray.push('I love the Beatles!'); ++n
} while (n < 15);
return loveBeatlesArray
}
