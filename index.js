function theBeatlesPlay(instrumentArray, musicianArray) {
  var result = [];
  
  for (var i = 0; i < musicianArray.length; i++) {
    var musician = musicianArray[i];
    var instrument = instrumentArray[i];
    result.push(instrument + ' plays ' + musician);
  }
  
  return result;
}

function johnLennonFacts(lennonFacts) {
  var result = [];
  var i = 0;
  
  while (i < lennonFacts.length) {
    var fact = lennonFacts[i];
    result.push(fact + '!!!');
    
    i++;
  }
  
  return result;
}

function iLoveTheBeatles(number) {
  var result = [];
  
  do {
    result.push("I love the Beatles!");
    number++;
    
  } while (number < 15);
  
  return result;
}









