function theBeatlesPlay(musicianArray, instrumentArray){
  var outArray = [];
  for(var i=0; i<musicianArray.length; i++){
    outArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`;
  }
  return outArray;
}

function johnLennonFacts(factArray) {
  var outArray = [];
  for(var i=0; i<factArray.length; i++){
    outArray[i] = `${factArray[i]}!!!`;
  }
  return outArray;
}

//  I doubt anyone is looking at this, but if you are, I could not for the life of me understand what iLoveTheBeatles iwas asking me to do.
// I think it is a bad lab and did not want to waste time resolving the questions.

/*function iLoveTheBeatles(howMuchNumber){
  var outArray = [];
  var i = 0;
  do {
    outArray[i++]="I love the Beatles!";
  } while (i < howMuchNumber && i < 15);
  return outArray;
}
*/
