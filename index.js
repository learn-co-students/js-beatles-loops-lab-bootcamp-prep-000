function theBeatlesPlay(musicianArray, instrumentArray){
  let musicianInstrument = [];
  for (let i = 0; i < musicianArray.length; i++){
    musicianInstrument.push(musicianArray[i] + " plays " + instrumentArray[i]);
  }
  return musicianInstrument;
}

function johnLennonFacts(factArray){
  let i = -1;
  let modifiedFactArray = [];
  while ( i < factArray.length - 1){
    i++;
    modifiedFactArray.push(factArray[i] + '!!!');
  }
  return modifiedFactArray;
}

function iLoveTheBeatles(num){
  let biggestBeatleFan = [];
  do { biggestBeatleFan.push('I love the Beatles!'); 
    num ++;
  } 
  while (num < 15);
  
  return biggestBeatleFan;
}