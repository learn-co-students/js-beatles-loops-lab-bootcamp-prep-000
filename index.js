function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var newArray = [];
  for(let i = 0; i < arrayMusicians.length; i++){
      newArray.push(arrayMusicians[i] + ' plays ' + arrayInstruments[i])
  }
  return newArray;
}

function johnLennonFacts(arrayOfFacts){
  var excitedFacts = [];
  while (arrayOfFacts.length > 0){
    excitedFacts.push(arrayOfFacts[0] + '!!!')
    arrayOfFacts.shift();
  }
  return excitedFacts
}

function iLoveTheBeatles(number){
  var fanaticArray = [];
  do {
    fanaticArray.push('I love the Beatles!');
    number+=1;
  }
  while (number < 15);
  return fanaticArray;
}
