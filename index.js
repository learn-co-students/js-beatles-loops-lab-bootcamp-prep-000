function theBeatlesPlay(musicianArray, instrumentArray) {
  var result = [];
  for (var i= 0; i < musicianArray.length; i++) {
    var musician = musicianArray[i];
    var instrument = instrumentArray[i];
    result.push(`${musician} plays ${instrument}`)
  }
  return result;
}

function johnLennonFacts(array) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    var fact = array[i];
    result.push(`${fact}!!!`);
    i++;
  }
  return result;
}

function iLoveTheBeatles(number) {
  var result = [];
  do {
    result.push("I love the Beatles!");
    number++;
  } 
  while (number < 15);
  return result;
}